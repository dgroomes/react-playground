# esbuild

A bare-bones React and TypeScript project built with [esbuild](https://esbuild.github.io/).


## Description

This is a bare-bones setup for a React and TypeScript project. esbuild is an enabler for such a simple setup. The
project includes foundational components and omits optional ones:

|                       | Component                        | Notes                                                                                                                                                                                                                                                                             |
|-----------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| &check;&nbsp;Includes | NPM footprint (`package.json`)   | It would be awkward to omit NPM because we need dependency management beyond manually downloading and unzipping .tar files.                                                                                                                                                       |
| &check;&nbsp;Includes | DefinitelyTyped                  | The TypeScript type packages for React are required. I've always found this awkward, because wouldn't it be best for React to provide their own type definitions? There's no way around this. This is not a dig on DefinitelyTyped!                                               |
| &check;&nbsp;Includes | esbuild                          | We need something to transpile TypeScript and TSX to JavaScript code that works in the browser. We're using esbuild in place of webpack and webpack loaders.                                                                                                                      |
| &check;&nbsp;Includes | `tsconfig.json`                  | esbuild requires a `tsconfig.json` file for TypeScript rules. There's no way around it.                                                                                                                                                                                           |
| Omits                 | a linter                         | For a demo project, let's omit the linter. There are ESLint configuration files in this repo.                                                                                                                                                                                     |
| Omits                 | A TypeScript type checker        | This is the most significant omission of the bunch. esbuild is not a type checker. You need to reach for the official TypeScript compiler to do that. I'm getting type feedback from my IDE. This is effective!                                                                   |
| Omits                 | A development web-server library | This is a bit facetious. esbuild comes with its own web server, but it's nice pointing out that you don't need to specify an additional dependency declaration to get a web server for development.                                                                               |
| Omits                 | Tests                            | There are no tests! The "test" is the developer running the build, verifying the visuals on the web page, and verifying the lack of errors in the console. Consider writing automated tests for significant projects. By contrast, consider when writing tests is the wrong move. |

Remember, this is a "bare-bones" setup. If I was going to build a larger project then I would use webpack.


## Instructions

Follow these instructions to build and serve the program:

1. Install the dependencies
    * ```shell
      npm install
      ```
2. Serve the content (and build continuously)
    * ```shell
      npm start
      ```
3. Open the browser
    * Open <http://[::1]:8000>
    * Verify the UI and iterate!


## Wish List

General clean ups, todos and things I wish to implement for this project:

* [x] DONE Add a component library to make the example more interesting and really exercise the bundler and showcase the experience.
  I think I'll add Ant Design, I like look of it and it's extremely popular (by stars at least).
* [ ] Consider figuring out source maps


## Reference

* [esbuild: "Getting Started"](https://esbuild.github.io/getting-started/)
    * I followed esbuild's guide to get started on this project. The esbuild docs are awesome!
* [esbuild API reference: `Server`](https://esbuild.github.io/api/#serve)
    * > Serve your code with a web server that rebuilds on every request
    * This development workflow is interesting. 
