# react-playground

Learning and exploring React <https://reactjs.org/>.

* Project source: <https://github.com/dgroomes/react-playground>
* GitHub Pages page: <https://dgroomes.github.io/react-playground/>

---

This project demonstrates using React, JSX and Markdown with no build tooling. React, Babel and Marked.js are loaded as
script tags. Babel transpiles the ESNext source code on-the-fly in the browser. Likewise, Marked.js compiles the source
Markdown files into HTML on-the-fly in the browser.

This project was originally scaffolded using the example project <https://reactjs.org/docs/add-react-to-a-website.html>. 

### Instructions

* Run a server with `python3 serve.py`
  * If you are on macOS then Python 3 and its built-in modules are already installed on your computer! If you are not on
    macOS, then you may need to install Python. See <https://www.python.org/downloads/>.
* Open the browser! (<http://localhost:8080>)

### Wish List

General clean ups, TODOs and things I wish to implement for this project:

* IN PROGRESS Componentize documentation across multiple Markdown files.
  * This is a challenge because dynamically rendering the contents of the Markdown source files from the repo requires 
    some code. See this StackOverflow answer for some background: <https://stackoverflow.com/a/53218452>.
  * DONE Emulate the Github Content API when running locally
  * DONE Show content listing in the UI under "Additional Content"
  * IN PROGRESS Filter items under "Additional Content" to only `.md` files and directories
  * When `.md` files are clicked under "Additional Content", the fragment should change to that file and the content 
    should be loaded under the "markdown" element 
* Use `async`. It's cool (read: modern) but how do I use it?
* Use JS imports so I dont' have to include every JS file by hand in `index.html`
* Implement loading spinners? Use Suspense <https://reactjs.org/docs/concurrent-mode-suspense.html>?
* Breakdown the `SourceBrowser` component into a combination of a `DirectoryListing` and a `Markdown` component

### Links

* React <https://reactjs.org/> *A JavaScript library for building user interfaces*
* Babel <https://babeljs.io/> *The compiler for next generation JavaScript*
* Marked.js <https://marked.js.org/> *A markdown parser and compiler. Built for speed.*