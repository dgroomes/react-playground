# webpack

NOT YET IMPLEMENTED

A React project built with [webpack](https://webpack.js.org/).

## Instructions

Follow these instructions to build and run the project.

1. Install dependencies
    * `npm install`
1. Build the project:
    * `npm run build`
1. Alternatively, build the project continuously and serve the output:
    * `npm run start`
    * The project is ready to be viewed in the browser! The browser should open automatically.

## Wish List

General clean ups, todos and things I wish to implement for this project:

* [ ] Actually implement some React 
* [ ] Do something with hooks
* [ ] Get the tsconfig.json right. I need to use the React preset, or whatever.
* [ ] What is the idiomatic way to do CSS in React? Do you just import the "styles.css" file? Is there not really a react
  way to do it? Do you somehow scope the CSS to the React element, like you would with web components?
* [x] DONE (it's what I thought, ideally you should express the dependencies correctly. But technically it doesn't matter if you aren't publishing anything) What's the deal with `devDependencies` the block vs the `dependencies` block these days? I noticed a `create-react-app`
  scaffolded repo only uses `dependencies` but I thought build tools and test frameworks were supposed to go in `devDependencies`?  

## Reference

* [Another "webpack" playground project of mine](https://github.com/dgroomes/javascript-playground/tree/main/webpack)
  * I mostly copied `react-playground/webpack` from the above project. 
