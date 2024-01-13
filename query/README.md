# query

NOT YET IMPLEMENTED

How do you query data in a React app? How do you avoid double `fetch` requests especially in the face of `<React.StrictMode>`?


## Overview

My React journey has been made up of starts and stops over the years. I don't do it full time. I make some a progress,
but then I get stuck on state management, the React lifecycle, tooling, or something else. That's perfectly fine and
normal. I want to make sure the starts outpace the stops. One of the things I'm particularly stuck on is "what is the
idiomatic way to query data from a React app?". In particular, I'm struggling with the dichotomy between React's
functional programming-inspired approach to call your component's `render` functions at its leisure (e.g. `<React.StrictMode>`)
and my app's need to actually control the side effects it has on external systems (e.g. the APIs I'm querying via `fetch`
calls).

This project is my attempt to nail down an idiomatic example. If I could find a blog post or StackOverflow answer that
answers my question I would gladly link to that. I want to actually run some code and see the network panel in the browser
dev tools myself though.


## Instructions

Follow these instructions to build and serve the program:

1. Pre-requisite: Node.js
   * I used version 20.11.0
2. Install the dependencies
    * ```shell
      npm install
      ```
3. Serve the content (and build continuously)
    * ```shell
      npm start
      ```
4. Open the browser
    * Open <http://[::1]:8000>
    * Verify the UI and iterate!


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Scaffold the app. The app suffers from the infamous "double fetch problem" caused by `<React.StrictMode>`.
* [ ] How to actually structure the program to avoid the double fetch problem? I need to push state "up" or rather kind
  of globally? I just don't get this. How does TanStack Query do it? It caches it I think. But what is the cache key?
  Maybe I should actually just implement a TanStack Query example first and use that as a reference.


## Reference

* [*TanStack Query*](https://tanstack.com/query/latest/docs/react/overview)
  * This is a well-written library that solves (or works around?) how to query data in a React app. Ultimately this is
    a strong technical reference for what I'm trying to learn.
