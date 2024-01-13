# tanstack-query

Example React program using [TanStack Query](https://tanstack.com/query/latest/docs/react/overview).

> Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte
> 
> -- <cite>https://tanstack.com/query/latest</cite>


## Overview

This is my own "learn by doing" project for learning TanStack Query. The program is similar to the [`react/basic` official
example in the TanStack Query codebase](https://github.com/TanStack/query/blob/3a127bfc13f9a147b3a3468f0ca1f3c7312dbb7c/examples/react/basic/src/index.jsx#L15).


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
    * Open the browser dev tools, and you'll see that the program does not suffer from double `fetch` requests even
      though `<React.StrictMode>` is enabled. You'll notice the extra renders, but only one `fetch` request. The logs
      look something like the following.
    * ```text
       [News] Render function invoked.
       [News] Render function invoked.
       [queryFn] invoked.
       [News] Render function invoked.
       [News] Render function invoked.
       ``` 


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Implement
* [ ] How to implement "refresh this data"? If I had a refresh button, do you call some method to invalidate the cache
  for that key or something?


## Reference

* [TanStack Query docs](https://tanstack.com/query/latest/docs/react/overview)
