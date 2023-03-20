# hooks

NOT YET IMPLEMENTED

React hook examples.


## Overview

If you develop with React, you will need to use hooks, and eventually you will need a deep understanding of hooks --
especially `useEffect`. This project dives into `useEffect` and provides examples of how to use it (and how not to use
it). 


## Instructions

Follow these instructions to build and serve the program:

1. Pre-requisite: Node.js
    * I used version 18.15.0
2. Install the dependencies
    * ```shell
      npm install
      ```
3. Serve the content (and build continuously)
    * ```shell
      npm start
      ```
4. Open the browser
    * Open <http://[::1]:8080>
    * Verify the UI and iterate!


## Wish List

General clean ups, todos and things I wish to implement for this project:

* [x] DONE Copy the [`useWindowListener` example program](https://react.dev/reference/react/useEffect#examples-custom-hooks)
  from the React docs. I found this example as I was trying to learn how `useEffect` works (rather, re-learning it
  because I had a decent understanding of it last year but I forgot lots of details because I don't exercise this
  knowledge frequently). This example is actually expensive because it constantly registers and unregisters the event
  listener. I think they got this one wrong? You need to be *extremely careful* with the dependencies you pass to `useEffect`.
* [ ] Re-implement the `useWindowListener` example program with a custom hook that uses `useRef` (or the memoize hook; or
  there's gotta be a way to do this...) to store the event listener callback. This is a better implementation because it
  doesn't re-register the event listener on every render.


## Reference

* [The new React docs (woohoo!)](https://react.dev/)
