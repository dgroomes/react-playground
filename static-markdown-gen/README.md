# static-markdown-gen

Generate Markdown from JSX using a custom renderer.


## Overview

React's `renderToStaticMarkup` converts JSX to HTML. This example applies the same concept but outputs Markdown instead
of HTML. It uses a custom JSX factory function and renderer that interprets JSX elements as Markdown constructs.

For example, `<h2>` becomes `##`, `<strong>` becomes `**bold**`, and `<ul><li>` becomes bullet lists. This lets you
write React-style components that generate Markdown files instead of HTML.


## Instructions

Follow these instructions to generate Markdown:

1. Pre-requisite: Bun
   * I used version 1.3.2
2. Install dependencies
   * ```shell
     bun install
     ```
3. Generate the Markdown file
   * ```shell
     bun main.jsx
     ```
4. View the output
   * Open `portfolio.md` in a text editor or Markdown viewer
   * The file is a well-formatted Markdown document


## How It Works

The JSX pragma `/** @jsx md */` tells the transpiler to use a custom factory function instead of React's `createElement`.
The `md` function creates a tree of objects representing the JSX structure. The `renderToMarkdown` function then walks
this tree and converts each element type to its Markdown equivalent.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [ ] Clean up the AI slop. Using HTML elements like `article` and `section` is not what I had in mind. I want only Markdown
  constructs. Also, can I make the renderer more idiomatic? Should/can I use a proper Markdown AST library? I'd like to.


## Reference

* [React Docs: *renderToStaticMarkup*](https://react.dev/reference/react-dom/server/renderToStaticMarkup)
