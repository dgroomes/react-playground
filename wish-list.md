# Wish List

General clean ups, TODOs and things I wish to implement for this project:

* IN PROGRESS Componentize documentation across multiple Markdown files.
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
  * IN PROGRESS (defect) Navigating the browser directly to a hash like <http://localhost:8080/#CHANGELOG.md> will cause "please wait!"
    to never go away in the directory listing and the page content.
  * DONE The default page should be configurable (e.g. "README.md") with fall-back to the first page in the directory 
    listing 
    because, by convention, a README is the most relevant starting place when viewing a codebase.
  * DONE Break apart WishList into its own .md file
* Use `async`. It's cool (read: modern) but how do I use it?
* Use JS imports so I dont' have to include every JS file by hand in `index.html`
* Implement loading spinners? Use Suspense <https://reactjs.org/docs/concurrent-mode-suspense.html>?
* Breakdown the `SourceBrowser` component into a combination of a `DirectoryListing` and a `Markdown` component
