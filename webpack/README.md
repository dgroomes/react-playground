# webpack

A React project built with [webpack](https://webpack.js.org/). It features TypeScript and `ts-loader`.


## What does a React project look like?

The surface area of popular software composition options and tooling (e.g. runtime libraries, programming languages, and build
tools) for web applications is perhaps the largest across all types of software projects in the world. There is a
combinatorial explosion of options: JS/TS, JSX, webpack/esbuild/babel/vite etc. What's incredible is how all of these
options are viable and sometimes mainstream! In other software ecosystems, there are only a couple dominant options and other
niche options.

This subproject serves as an executable example and knowledge reference for my own sake so that I have at least one
"working and well-understood" setup for a React project. I'm eager to explore many of the different options, and this
is just one of them.

Here are some elements I need to remember about "how to create a React + TypeScript project":

* Install the *DefinitelyTyped* type definitions for each library
  * ```shell
    npm install --save-dev @types/react @types/react-dom
    ```
* Use `allowSyntheticDefaultImports: true` in the TypeScript config
  * [StackOverflow answer: use `allowSyntheticDefaultImports: true` in React projects](https://stackoverflow.com/a/57555126)
  * I don't know how this works, so I really need the reminder.
* webpack is probably the safest option.
  * webpack is safest because it's "Google-ability" is strongest, the docs are extensive, and the feature set is huge. 


## Instructions

Follow these instructions to build and run the project.

1. Install dependencies
    * ```shell
      npm install
      ```
2. Build the project:
    * ```shell
      npm run build
      ```
3. Alternatively, build the project continuously and serve the output:
    * ```shell
      npm start
      ```
    * The project is ready to be viewed in the browser! The browser should open automatically.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Actually implement some React 
* [x] DONE Do something with hooks
* [ ] Get the tsconfig.json right. I need to use the React preset, or whatever.
* [ ] What is the idiomatic way to do CSS in React? Do you just import the "styles.css" file? Is there not really a react
  way to do it? Do you somehow scope the CSS to the React element, like you would with web components?
* [x] DONE (it's what I thought, ideally you should express the dependencies correctly. But technically it doesn't matter if you aren't publishing anything) What's the deal with `devDependencies` the block vs the `dependencies` block these days? I noticed a `create-react-app`
  scaffolded repo only uses `dependencies` but I thought build tools and test frameworks were supposed to go in `devDependencies`?
  * I needed this: `npm install --save-dev @types/react @types/react-dom` 
* [ ] Pare down `webpack.config.js` to the required minimum. I'm not sure the `resolve` and `module.rules` are correct.
* [ ] Pare down `tsconfig.json` to the required minimum. I'd like to understand `allowSyntheticDefaultImports`.
* [x] DONE Use async/await instead of promises where feasible.
* [ ] Use React ["suspense"](https://reactjs.org/docs/react-api.html#reactsuspense) for the mocked data loading.
  Note, React doesn't actually support suspense for data fetchin yet. The docs read:
  > In the future we plan to let Suspense handle more scenarios such as data fetching.
* [x] DONE Upgrade to latest webpack and other deps
* [x] DONE Debug logging.


## Reference

* [Another "webpack" playground project of mine](https://github.com/dgroomes/javascript-playground/tree/main/webpack)
  * I mostly copied `react-playground/webpack` from the above project. 
* [TypeScript "Module Resolution"](https://www.typescriptlang.org/docs/handbook/module-resolution.html)
* [StackOverflow answer: use `allowSyntheticDefaultImports: true` in React projects](https://stackoverflow.com/a/57555126)
  * I don't know how this works exactly. But people seem to need this in TypeScript + React projects. I certainly did.
