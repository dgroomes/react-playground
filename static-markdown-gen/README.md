# static-markdown-gen

Generate Markdown from JSX using a custom renderer.


## Overview

This example demonstrates how to use JSX syntax to generate Markdown output instead of HTML. It uses a custom JSX
factory function and renderer that interprets JSX elements as Markdown constructs.

For example, `<h2>` becomes `##`, `<strong>` becomes `**bold**`, and `<ul><li>` becomes bullet lists. This lets you
write JSX-style components that generate Markdown files without using React.


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


## How It Works

The JSX pragma `/** @jsx md */` tells the transpiler to use a custom factory function instead of React's `createElement`.
The `md` function creates a tree of objects representing the JSX structure. The `renderToMarkdown` function then walks
this tree and converts each element type to its Markdown equivalent.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

- [x] DONE (well partially) Clean up the AI slop. Using HTML elements like `article` and `section` is not what I had in mind. I want only Markdown
  constructs. 
- [x] DONE Remove React. This has nothing to do with React. It turns out it's more a JSX example.
- [ ] Remove this from `react-playground`. 
- [ ] IN PROGRESS Use a proper markdown AST library and serializer to construct the markdown document instead of string concatenation.
   - DONE First draft (thanks LLM)
   - Make sense of it. I don't need to support all these element types.


## Reference

* [TypeScript JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
