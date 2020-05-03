// Show the README:
//   1. Load the README.md source file from the root of the repo
//   2. Convert the Markdown source to HTML using marked.js
//   3. Add the HTML to the DOM
fetch('README.md')
    .then(response => response.text())
    .then(markown => marked(markown))
    .then(html => {
        let readmeEl = document.getElementById('readme');
        return readmeEl.innerHTML = html;
    });