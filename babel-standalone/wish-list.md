# Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE Componentize documentation across multiple Markdown files.
  * This is a challenge because dynamically rendering the contents of the Markdown source files from the repo requires 
    some code. See this StackOverflow answer for some background: <https://stackoverflow.com/a/53218452>.
  * DONE Emulate the Github Content API when running locally
  * DONE Show content listing in the UI under "Additional Content"
  * DONE Filter items under "Additional Content" to only `.md` files and directories
  * DONE When `.md` files are clicked under "Additional Content", the fragment should change to that file and the content 
    should be loaded under the "markdown" element 
  * DONE On initial page load, a default page should be in the hash (for example, "README.md"). This is 
    symmetrical to how the navigation works where when you navigate to another document (e.g. CHANGELOG.md) then the 
    hash is updated with that document. The default page should not be an exception to the "location hash based"-routing
    strategy  
  * DONE (defect) Navigating the browser directly to a hash like <http://localhost:8080/#CHANGELOG.md> will cause "please wait!"
    to never go away in the directory listing and the page content.
  * DONE The default page should be configurable (e.g. "README.md") with fall-back to the first page in the directory 
    listing 
    because, by convention, a README is the most relevant starting place when viewing a codebase.
  * DONE Break apart WishList into its own .md file
* Use `async`. It's cool (read: modern) but how do I use it?
* Use JS imports so I don't have to include every JS file by hand in `index.html`
* Implement loading spinners? Use Suspense <https://reactjs.org/docs/concurrent-mode-suspense.html>?
* Breakdown the `SourceBrowser` component into a combination of a `DirectoryListing` and a `Markdown` component
* Use consistent language on "page" (i.e. web page) vs "document" (e.g. "wish-list.md", "README.md")
* [x] DONE (defect) When the URL hash is manually edited to a document that does not actually exist, it still fires off the GET
  request to the GitHub API and will load the error response into the page. Instead, there should be error handling and
  show a nicer "Not found" message.
* Cache the document in the browser.
  * Use http headers and cache between page reloads/visits? Or just cache for the same session and accommodate loading
    from the cache when flipping between documents via URL hash changes?  
* [x] DONE (I just deleted it. I think I only added it to learn how to de-React this app but it's not an interesting component) Defect. `Hello from the <HelloHeader> element!` text is showing up and is a visual defect. 
* React 18 defect. With React 18, it complains when you don't use ReactDOM from the *client* but that doesn't seem to be
  possible. Even React's own CDN-based example has this error: <https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/html/single-file-example.html>.
  See the defect described in [this StackOverflow question](https://stackoverflow.com/q/71696487).
* [ ] Support a couple levels of directories. On the GitHub Pages-hosted page, I want to see more than just the root
  `README.md`. I want to see `babel-standalone/README.md`, `babel-standalone/wish-list.md`, `babel-standalone/CHANGELOG.md`,
  `esbuild/README.md` etc.
