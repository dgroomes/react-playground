/**
 * A content browser for the source code in the GitHub repository.
 *
 * Shows a directory listing on the left-hand side of the page that includes all ".md" files in the git repo. The files
 * can be navigated to by clicking on them. The contents of the currently opened file shows on the right-hand side.
 */
class SourceBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageName: window.config.loadingMessage,
            pageContent: window.config.loadingMessage,
            directoryListing: []
        };
        // According to https://reactjs.org/docs/handling-events.html
        //     "This binding is necessary to make `this` work in the callback"
        //
        // But why? And what is the idiomatic alternative (with hooks and without hooks)?
        this.loadDocument = this.loadDocument.bind(this);
    }

    /**
     * Use the GitHub API to list the contents of the repo in a directory listing format.
     * See https://stackoverflow.com/a/53218452
     *
     * And filter for only Markdown files (i.e. files ending in ".md")
     *
     * @return Promise which resolves to the directory listing files
     */
    loadDirectoryListing() {
        let user = window.config.user;
        let repo = window.config.repo;
        let origin = this.githubApiOrigin()
        let url = `${origin}/repos/${user}/${repo}/contents/`;

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                let dirListingMdFiles = json.filter(file => /.+\.md$/.test(file.name))
                this.setState({directoryListing: dirListingMdFiles})
                console.debug(`Directory listing loaded with ${dirListingMdFiles.length} files after filtering`);
                return dirListingMdFiles;
            });
    }

    /**
     * Helper function to determine the origin to use for the GitHub Content API.
     *
     * If the current page is detected to be hosted locally, then use the current origin. Else, the page must be hosted by
     * GitHub Pages and so the method returns the GitHub API subdomain 'https:api.github.com'.
     * @return origin to use to make the GitHub Content API requests
     */
    githubApiOrigin() {
        let currentUrl = new URL(window.location);
        let detectedLocal = ['127.0.0.1', 'localhost'].includes(currentUrl.hostname);
        if (detectedLocal) {
            return currentUrl.origin
        } else {
            console.log("Detected the page is NOT hosted locally. The page must be hosted on GitHub")
            return 'https://api.github.com';
        }
    }

    /**
     * Load a document:
     *  1. Load the document source file from the root of the repo
     *  2. Handle unsuccessful responses
     *  3. Convert the Markdown source to HTML using marked.js
     *  4. Add the HTML to the SourceBrowser component
     */
    loadDocument(documentName) {
        fetch(documentName)
            .then(response => {
                if (response.status === 404) {
                    return `(404) Document '${documentName}' was not found`
                } else if (!response.ok) {
                    throw new Error(`Network response was not okay. status=${status}`)
                } else {
                    return response.text();
                }
            })
            .then(markown => {
                // This is a bit of an awkward place to do this but configure Marked in such a way
                // newly advised by the 5.x line (see https://github.com/markedjs/marked/releases/tag/v5.0.0).
                marked.use({
                    mangle: false,
                    headerIds: false,
                });
                let html = marked.parse(markown);
                this.setState({ pageName: documentName, pageContent: html})
            })
            .catch(err => {
                this.setState({ pageName: documentName, pageContent: "❌ Something went wrong. Failed to load document." })
                console.error({err})
            })
        ;
    }

    /**
     * "User-mode" initialization stuff. I don't totally follow the React lifecycle but I think this is the right place
     * to do initialization stuff for application code because this function is called *after* the React initialization
     * stuff is done (I think...).
     *
     * In other words, this function is for "user"(or, "application")-level initialization stuff which can happen after
     * the "system"(or, "React")-level initialization stuff has happened. That's my mental model at least.
     *
     * In particular, the initialization stuff includes:
     *   * Load the directory listing
     *   * Register a hash change event handler to handle navigation
     *
     * There is a *second phase* of initialization that kicks off after the directory listing is loaded. This phase
     * determines the actual document that will be rendered on the page (a so-called "confirmed document") based on a
     * combination of the URL hash (if it exists), a hard-coded "default document" and the directory listing. It loads the
     * "confirmed document" and renders its content on the page.
     */
    componentDidMount() {
        let promise = this.loadDirectoryListing();

        let targetDocument;
        if (window.location.hash === "") {
            console.debug(`On initial page load, found that no specific target document was requested in the URL hash. Will navigate to the 'default page' ${window.config.defaultPage}`);
            targetDocument = window.config.defaultPage;
        } else {
            console.debug(`On initial page load, found that the hash was non-empty: ${window.location.hash}. Will try to navigate to it.`);
            targetDocument = window.location.hash.substring(1); // remove the leading '#'
        }

        promise.then(dirListingFiles => {
            let currentUrlHashValue = window.location.hash.substring(1); // remove the leading '#'
            if (currentUrlHashValue === targetDocument) {
                console.debug(`Found that the URL hash value ('${currentUrlHashValue}') is already equal to the 'target document' ('${targetDocument}'). Will *not* change the hash but instead will the document.`);
                this.loadDocument(targetDocument)
            } else { // When we need to load a default page
                window.location.hash = targetDocument;
            }
        });
        window.onhashchange = (ev => {
            console.log(`[SourceBrowser] Hash change event detected. newUrl=${ev.newURL}`);
            let targetDocument = window.location.hash.substring(1); // remove the leading '#'
            this.loadDocument(targetDocument);
        });
    }

    render() {
        return <div>
            <div id="sidebar">
                <h1 id="page-name">{this.state.pageName}</h1>
                <div id="directory-listing">
                    <ul>{this.state.directoryListing.map(file => {
                        // NOTE: React really wants list items to have a key. So, assigning 'path' to the key because it
                        // is a unique identifier (rather, a key!).
                        return <li key={file.path}><a href={"#" + file.path}>{file.name}</a></li>;
                    })}</ul>
                </div>
            </div>
            {/* Danger! "dangerouslySetInnerHTML" */}
            <div id="page-content" dangerouslySetInnerHTML={{__html: this.state.pageContent}} className="markdown-body"/>
            <hr/>
        </div>;
    }
}
