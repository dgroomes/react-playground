/**
 * A content browser for the source code in the GitHub repository.
 *
 * Shows a directory listing on the left-hand side of the page that includes all ".md" files in the git repo. The files
 * can be navigated to by clicking on them. The contents of the currently opened shows on the right-hand side.
 */
class SourceBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageName: 'please wait!',
            pageContent: 'please wait!',
            directoryListing: []
        };
        // According to https://reactjs.org/docs/handling-events.html
        //     "This binding is necessary to make `this` work in the callback"
        //
        // But why? And what is the idiomatic alternative (with hooks and without hooks)?
        this.loadPage = this.loadPage.bind(this);
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
        let user = 'dgroomes';
        let repo = 'react-playground';
        let origin = this.githubApiOrigin()
        let url = `${origin}/repos/${user}/${repo}/contents/`;

        return fetch(url)
            .then(response => response.json())
            .then(json => {
                let dirListingMdFiles = json.filter(file => /.+\.md$/.test(file.name))
                this.setState({directoryListing: dirListingMdFiles})
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
     * Load a page:
     *  1. Load the page source file from the root of the repo
     *  2. Convert the Markdown source to HTML using marked.js
     *  3. Add the HTML to the SourceBrowser component
     */
    loadPage(pageName) {
        fetch(pageName)
            .then(response => response.text())
            .then(markown => {
                let html = marked(markown);
                this.setState({pageName, pageContent: html})
            });
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
     * There is a *second phase* of initialization that kicks off after directory listing is loaded. This phase loads
     * a default file from the listing and renders its content on the page.
     */
    componentDidMount() {
        this.loadDirectoryListing().then(dirListingFiles => {
            let length = dirListingFiles.length;
            console.debug(`Directory listing loaded with ${length} files`);
            let defaultPage = dirListingFiles[0];
            console.debug(`Navigating to the first page in the list: ${JSON.stringify(defaultPage.name, null, 4)}`)
            window.location.hash = defaultPage.name;
        });
        window.onhashchange = (ev => {
            console.log(`[SourceBrowser] Hash change event detected. newUrl=${ev.newURL}`);
            let targetDocument = window.location.hash.substring(1); // remove the leading #
            this.loadPage(targetDocument);
        });
    }

    render() {
        return <div>
            <div id="sidebar">
                <h1 id="page-name">{this.state.pageName}</h1>
                <div id="directory-listing">
                    <ul>{this.state.directoryListing.map(file => {
                        return <li><a href={"#" + file.path}>{file.name}</a></li>;
                    })}</ul>
                </div>
            </div>
            {/* Danger! "dangerousSetInnerHTML" */}
            <div id="page-content" dangerouslySetInnerHTML={{__html: this.state.pageContent}} className="markdown-body"/>
            <hr/>
        </div>;
    }
}