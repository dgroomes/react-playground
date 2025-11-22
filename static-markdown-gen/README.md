# static-markdown-gen

Generate Markdown from JSX using a custom Markdown-aware renderer.


## Overview

JSX is an ergonomic way to template HTML, but we can also use it to generate other document formats like Markdown.
This project shows how to do this by creating a custom JSX factory function and renderer that outputs Markdown
instead of HTML.

Templating tools like [Handlebars](https://github.com/handlebars-lang/handlebars.js) and [mustache.js](https://github.com/janl/mustache.js)
are a popular choice for templating HTML and other text-based formats. These tools are HTML-aware, and will escape any
HTML special characters in the output. However, they aren't aware of Markdown.

This project uses libraries from the [unified](https://github.com/unifiedjs) ecosystem to programmatically build
a Markdown AST and serialize it to a Markdown string. This has the advantage that Markdown special characters are
properly escaped when embedded in a conflicting context. For example, you should be able to bold a piece of text that
has asterisks in it without having to think about escaping those asterisks yourself.

The JSX pragma `/** @jsx md */` tells the transpiler to use a custom factory function instead of React's `createElement`.
The `md` function creates a tree of objects representing the JSX structure. The `renderToMarkdown` function then walks
this tree and converts each element type to its Markdown equivalent.

This is only a toy example: it is neither comprehensive nor robust.


## Instructions

Follow these instructions to generate Markdown:

1. Pre-requisite: Bun
   * I used version 1.3.2
2. Generate the Markdown file
   * ```shell
     bun main.tsx
     ```
3. View the output
   * Open `portfolio.md` in a text editor or Markdown viewer
   * The file is a well-formatted Markdown document


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [x] DONE (well partially) Clean up the AI slop. Using HTML elements like `article` and `section` is not what I had in mind. I want only Markdown
  constructs. 
- [x] DONE Remove React. This has nothing to do with React. It turns out it's more a JSX example.
- [ ] Remove this from `react-playground`. 
- [x] DONE Use a proper markdown AST library and serializer to construct the Markdown document instead of string concatenation.
   - DONE First draft (thanks LLM)
   - DONE (OK I mostly get it) Make sense of it. I don't need to support all these element types.


## Reference

* [TypeScript JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
