# react-playground

📚 Learning and exploring React <https://reactjs.org/>.

> A JavaScript library for building user interfaces
> 
> --<cite>https://reactjs.org/</cite>

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone subprojects

This repository illustrates different concepts, patterns and examples via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:


## `babel-standalone/`

A *zero-build-step* React project implemented with Babel's in-browser compiler `@babel/standalone`. This is React *the CDN way*.

See the README in [babel-standalone/](babel-standalone/).


## `vite/`

A React project built with [Vite](https://vitejs.dev/). It features TypeScript.

See the README in [vite/](vite/).


## `webpack/`

A React project built with [webpack](https://webpack.js.org/). It features TypeScript and `ts-loader`.

See the README in [webpack/](webpack/).


## `esbuild/`

A bare-bones React and TypeScript project built with [esbuild](https://esbuild.github.io/).

See the README in [esbuild/](esbuild/).


## `raw-html/`

Incorporate raw HTML into a React app.

See the README in [raw-html/](raw-html/).


## `use-effect-hook/`

A simple example of how to use (and not use) the `useEffect` React hook.

See the README in [use-effect-hook/](use-effect-hook/).


## `double-fetching-problem/`

An illustration of the familiar "double fetching" problem that many React program designs are susceptible to.

See the README in [double-fetching-problem/](double-fetching-problem/).


## `tanstack-query/`

Example React program using [TanStack Query](https://tanstack.com/query/latest/docs/react/overview).

See the README in [tanstack-query/](tanstack-query/).


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE (although I'm not pursuing it because it doesn't support SSG) Consider creating a [Deno Fresh](https://github.com/denoland/fresh) example project. I like what Deno has accomplished
  and where it's going and I was pleasantly surprised to see that Fresh is branded with a 1.x release. I generally am
  cautious about adopting 0.x software at face value but that's not a hard rule.
* [ ] Consider moving my Next.js playground to here. Or rather, moving all the "toolchain" example projects out of here
  and into a new project called something like `react-toolchain-playground`. That would be a big playground, and also it
  would free up this playground to focus on features of React itself (a much better fit).
* [ ] Consider bringing back the core content of `flat-ui` but use React Table or a viable/idiomatic alternative, if
  it would make a useful reference.
* [ ] HOLD (Partially implemented but I'm holding off until I finish a TanStack Query example subproject) "Synchronizing with an external system". These are the words React uses describe the purpose of the `useEffect` hook.
  I already have an example I like of the `useEffect` hook, but it's in terms of misunderstanding the dependencies array
  and I want an example that's a little different. I'm struggling with the prototypical problem where, because I'm using
  `<React.StrictMode>`, and a `fetch` request, I'm getting two calls which is just wrong. What's the right way to do this?
  I know tools like TanStack Query exist to handle this, but I want to implement it from React primitives (not that
  React/JavaScript is primitive at all). I've tried and failed to implement a [`useFetch` hook in another project](https://github.com/dgroomes/my-github-explorer/commit/a07cc9751d380594882eabb8d4a0734d570df00f#diff-8c1796409f2dc6b7d3584b5fe4249dd10e3ab35b5d8c90262a205497e48e269dL2)
  and that was too ambitious. So I want maybe a `query` subproject (and also I probably want a TanStack Query subproject
  for comparison and because that is a nice tool).
* [x] DONE TanStack Query example very similar to the `query` subproject. 
