# babel-standalone

A *zero-build-step* React project implemented with Babel's in-browser compiler `@babel/standalone`. This is React *the CDN way*.

## Description

This project builds a toy "Markdown browser" hosted in [GitHub pages](https://dgroomes.github.io/react-playground/babel-standalone).
The `babel-standalone/` directory is symlinked to `/docs` and this (hopefully) *just works*.

React, Babel and Marked (sometimes known as `Marked.js`) are loaded as script tags from a CDN (<https://unpkg.com/>). Babel
transpiles the ESNext source code on-the-fly in the browser. Likewise, Marked compiles the source Markdown files into HTML
on-the-fly in the browser.

This project was originally scaffolded using the example project <https://reactjs.org/docs/add-react-to-a-website.html>. 

## Instructions

Follow these instructions to serve the app (rejoice in the fact that there's no build step!):

1. Serve the source code:
   * `python3 serve.py`
   * Note: If you are on macOS then Python 3 and its built-in modules are already installed on your computer! If you are not on
     macOS, then you may need to install Python. See <https://www.python.org/downloads/>.
2. Open the browser!
   * Open <http://localhost:8080> in your browser

## Reference

* React <https://reactjs.org/> *A JavaScript library for building user interfaces*
* Babel <https://babeljs.io/> *The compiler for next generation JavaScript*
* Marked <https://marked.js.org/> *A markdown parser and compiler. Built for speed.*