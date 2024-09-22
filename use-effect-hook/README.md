# use-effect-hook

A simple example of how to use (and not use) the `useEffect` React hook.


## Overview

If you develop with React, you will need to use hooks, and eventually you will need a deep understanding of hooks --
especially `useEffect`. This project dives into `useEffect` and provides examples of how to use it (and how not to use
it).


## Instructions

Follow these instructions to build and serve the program:

1. Pre-requisite: Node.js
    * I used version 20.17.0
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
    * Relate what you see on the web page to the code. 


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Copy the [`useWindowListener` example program](https://react.dev/reference/react/useEffect#examples-custom-hooks)
  from the React docs. I found this example as I was trying to learn how `useEffect` works (rather, re-learning it
  because I had a decent understanding of it last year but I forgot lots of details because I don't exercise this
  knowledge frequently). This example is actually expensive because it constantly registers and unregisters the event
  listener. I think they got this one wrong? You need to be *extremely careful* with the dependencies you pass to `useEffect`.
* [x] DONE Re-implement the `CursorSpotlight` example program so that the `useEffect` hook doesn't re-register
  the event listener on every render. The trick is to use `useCallback`.
* [x] DONE (I tried that but then iframes make for a more reduced (and thus easier to learn) example) Can I have both `CursorSpolight` and `CursorSpotlight2` in the code at the same time? I want two boxes. On mouse
  enter, I want to enable the spotlight.
* [x] DONE Remove TypeScript from this project. It's not essential to the example.
* [x] DONE Should I install type definitions even though I'm not using TypeScript? I think so.


## Reference

* [The new React docs (woohoo!)](https://react.dev/)
