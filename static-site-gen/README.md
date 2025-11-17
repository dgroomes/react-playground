# static-site-gen

Static site generation (SSG) in pure React. 


## Overview

This project shows how to use React's `renderToStaticMarkup` to convert JSX components into HTML. The approach is minimal:
just React and Bun, no additional libraries or build tools.

The example renders a simple portfolio page from JSON data, demonstrating how React can be used as a templating engine
for simple static site generation.

Bun's out-of-the-box support for TypeScript and JSX makes this an especially compact pattern. 


## Instructions

Follow these instructions to generate the static HTML:

1. Pre-requisite: Bun
   * I used version 1.3.2
2. Install dependencies
   * ```shell
     bun install
     ```
3. Generate the HTML file
   * ```shell
     bun main.tsx
     ```
4. View the output
   * Open `portfolio.html` in a browser
   * The file is a complete, static HTML document


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [x] Single-file `.tsx` program. I want to showcase an especially concise project pattern. How small can we feasibly
  get? We can't quite omit a `package.json` right, like we could with `uv`?
  - UPDATE: Tried Bun's version pinning feature to eliminate `package.json`, but WebStorm can't make sense of the embedded version and intellisense won't work (bad). Reverted to using `package.json`. 
- [x] DONE Go pack to package.json. WebStorm can't make sense of the embedded version and so intellisense won't work (bad).


## Reference

* [React Docs: *renderToStaticMarkup*](https://react.dev/reference/react-dom/server/renderToStaticMarkup)
