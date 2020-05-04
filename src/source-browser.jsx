/**
 * NOT YET FULLY IMPLEMENTED
 *
 * A content browser for the source code in the GitHub repository
 *
 * TODO: implement the ability to actually click into other source files.
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
     */
    loadDirectoryListing() {
        let user = 'dgroomes';
        let repo = 'react-playground';
        let origin = this.githubApiOrigin()
        let url = `${origin}/repos/${user}/${repo}/contents/`;

        fetch(url)
            .then(response => response.json())
            .then(json => {
                // let htmlString = '<ul>';
                // for (let file of json) {
                //     htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
                // }
                // htmlString += '</ul>';
                this.setState({directoryListing: json})
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

    componentDidMount() {
        this.loadDirectoryListing()
        this.loadPage('README.md');
    }

    render() {
        return <div>
            <h3>Source Browser ({this.state.pageName})</h3>
            <ul>{this.state.directoryListing.map(file => {
                return <li><a href={file.path}>{file.name}</a></li>;
            })}</ul>
            <div id="markdown" dangerouslySetInnerHTML={{__html: this.state.pageContent}}/>
            <hr/>
        </div>;
    }
}