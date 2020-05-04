// Use the GitHub API to list the contents of the repo
// https://stackoverflow.com/a/53218452

/**
 * Determine the origin to use for the GitHub Content API.
 *
 * If the current page is detected to be hosted locally, then use the current origin. Else, the page must be hosted by
 * GitHub Pages and so the method returns the GitHub API subdomain 'https:api.github.com'.
 * @return origin to use to make the GitHub Content API requests
 */
function githubApiOrigin() {
    let currentUrl = new URL(window.location);
    let detectedLocal = ['127.0.0.1', 'localhost'].includes(currentUrl.hostname);
    if (detectedLocal) {
        return currentUrl.origin
    } else {
        console.log("Detected the page is NOT hosted locally. The page must be hosted on GitHub")
        return 'https://api.github.com';
    }
}

let user = 'dgroomes';
let repo = 'react-playground';
let origin = githubApiOrigin()
let url = `${origin}/repos/${user}/${repo}/contents/`;

fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json); // print
        console.log(JSON.stringify(json, null, 4)); // pretty print
        let htmlString = '<ul>';
        for (let file of json) {
            htmlString += `<li><a href="${file.path}">${file.name}</a></li>`;
        }
        htmlString += '</ul>';
        document.getElementById('listing').innerHTML = htmlString;
    });