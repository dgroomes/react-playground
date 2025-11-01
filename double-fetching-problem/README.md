# double-fetching-problem

An illustration of the familiar "double fetching" problem that many React program designs are susceptible to.


## Overview

My React journey has been made up of starts and stops over the years. I don't do it full time. I make some progress,
but then I get stuck on state management, the React lifecycle, tooling, or something else. That's perfectly fine and
normal. I want to make sure the starts outpace the stops. One of the things I'm particularly stuck on is how to deal with
querying external data from a React program. In particular, I'm struggling with the dichotomy between React's
functional programming-inspired approach to call your component's `render` functions at its leisure (e.g. [`<StrictMode>`](https://react.dev/reference/react/StrictMode))
and my app's need to actually control the side effects it has on external systems (e.g. the APIs I'm querying via `fetch`
calls).

In other words, what are the idiomatic ways to query data in a React app? How do you avoid double `fetch` requests
especially in the face of `<StrictMode>`?

This project does not solve that problem, but it serves as a clear problem statement. It defines a simple React program
that needs to fetch an initial set of data to serve the user. It uses React's `<StrictMode>`. And, it suffers from
double `fetch` requests because the design of the program is too naive.


## Instructions

Follow these instructions to build and serve the program:

1. Pre-requisite: Node.js
   * I used version 23.7.0
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
    * Open the browser dev tools and see the double fetching problem in action. The output will look something like the
      following.
      ```text
      [News] Render function invoked.
      [News] Render function invoked.
      [News] `useEffect` callback invoked. Making a 'fetch' request.
      [News] `useEffect` callback invoked. Making a 'fetch' request.
      [News] `fetch` received a response.
      [News] `fetch` received a response.
      [News] Render function invoked.
      ```


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Scaffold the app. The app suffers from the infamous "double fetch problem" caused by `<React.StrictMode>`.
* [ ] Use the "fetch-on-render" and "render-as-you-fetch" language to describe the problem and alternatives. I think
  this example is a good fit for this discussion.


## Reference

* [TanStack Query Docs](https://tanstack.com/query/latest/docs/react/overview)
  * This is a well-written library that solves (or works around?) how to query data in a React app. Ultimately this is
    a strong technical reference for what I'm trying to learn.
