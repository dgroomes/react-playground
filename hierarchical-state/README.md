# hierarchical-state

EXPERIMENTAL

An example of state management in React.


## Overview

I need to get better at state management in React. This project is me doing that. I need to know the APIs and then
exercise the concepts in a runnable example program. I'm particularly interested in how to manage local groupings of state
instead of just treating everything globally. For example, if the web application has multiple editor tabs or something,
they don't need to know about each other, but they encapsulate their own complex state and hierarchy of components. What
does that look like?


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
    * Look at the UI, iterate on the code, refresh the page, and repeat.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Scaffold the program
* [ ] IN PROGRESS Make some hierarchical state thing and then can we reproduce the double fetching problem? And then solve it with
  "the right way" of doing state management in React?
  * I don't think I need much of a hierarchy actually I think I'm more interested in a dynamic shape of the state. For
    example, in some app you might have the user's profile information. This shape is known at design time. But as soon
    as you have a list of things (non-primitives) then it's a little more interesting. Like open text editor tabs or
    something.
  * DONE. Turn the "lucky numbers" component into a "dice roll" component. This component will fetch from a mock
    HTTP/JSON API using the mocked fetch, and it will show the roll value and have a re-roll button. 
  * DONE (pretty decent; this shows the double fetching problem) Show the fetch count. I tried abstracting a GameApiClientClient and other things but the demo was getting
    out of scope. I think I want like a global fetchCount state or something. Should I set it via props or use the Context API?
  * Fix the double fetching problem. I think I need to push state up out of the GameDieRoll component. Not really sure.
    I'm hoping to find multiple ways to solve this problem.
* DONE Work around the double fetching problem using a ref via `useRef`. It's hard to say what the "right" thing is to do
  here. The spirit of React's strict mode is to help you find problems. I appreciate that it [finds usages of deprecated
  APIs](https://react.dev/reference/react/StrictMode#fixing-deprecation-warnings-enabled-by-strict-mode) and the double
  render is interesting and I think reasonable. I find the [re-running effects feature](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development)
  to be aggressive and odd. I get that it will help you to literally stop and think about your `useEffect` calls because of
  the double logging (although I'm shocked that they even considered suppressing the double render logs from the console
  using React DevTools). I don't think it directly helps you to realize that there is a clean-up facility of `useEffect`.
  For now, I'm going to use `useRef` and lock it in as a working example. But at this point I'm curious if I can just
  take all my effect-ful code out of React. Can I use React for just rendering (as original React intended?) and have
  the "rest of my program" as an organic JavaScript program? 


## Reference

* [React Docs: *Managing State*](https://react.dev/learn/managing-state)
