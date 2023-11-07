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


## `fresh/`

A React project built with [Deno](https://deno.land/) and using the [Fresh](https://fresh.deno.dev/) framework.

See the README in [fresh/](fresh/).


## `raw-html/`

Incorporate raw HTML into a React app.

See the README in [raw-html/](raw-html/).


## `use-effect-hook/`

A simple example of how to use (and not use) the `useEffect` React hook.

See the README in [use-effect-hook/](use-effect-hook/).


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
