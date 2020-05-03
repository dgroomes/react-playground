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
  * If you are on macOS, Python 3 and its built-in modules are already installed on your computer.
* Open the browser! (<http://localhost:8080>)

### Wish List

General clean ups, TODOs and things I wish to implement for this project:

* React-ify components of the `index.html` and JS source files.
  * In other words, slim down the source code in `index.html` by pushing its contents into custom React components. For
    example, create a React component to represent the README Markdown content. We want to lean into the tools we are 
    using and get more leverage out of them.
* Componentize documentation across multiple Markdown files.
  * This is a challenge because dynamically rendering the contents of the Markdown source files from the repo requires 
    some code. See this StackOverflow answer for some background: <https://stackoverflow.com/a/53218452>. 

### Links

* React <https://reactjs.org/> *A JavaScript library for building user interfaces*
* Babel <https://babeljs.io/> *The compiler for next generation JavaScript*
* Marked.js <https://marked.js.org/> *A markdown parser and compiler. Built for speed.*