# fresh

A React project built with [Deno](https://deno.land/) and using the [Fresh](https://fresh.deno.dev/) framework.


## Overview

By its sheer popularity and large ecosystem of component/feature libraries, React is unavoidable. I want to be proficient
in React. By the same token, TypeScript is also unavoidable. It is inextricably linked with the modern web. In fact,
some of the component libraries I am most interested in using ([GraphiQL](https://github.com/graphql/graphiql) and
[flat-ui](https://github.com/githubocto/flat-ui)) are based on React and written in TypeScript. The complexity doesn't
stop there. I need a way to build and run the app. Enter webpack, Vite, esbuild, Next.js, and others. In this project
I'm exploring the Fresh framework (and by extension Deno) in hopes that these tools make developing a TypeScript + React
application a delight.


## Instructions

Follow these instructions to run the app:

1. Pre-requisite: Deno
   * I used Deno `1.31.1` for this project.
   * I manage my Deno installation with HomeBrew (although the options are great too).
2. Start a continuous dev server
   * ```shell
     deno task start
     ```
   * This will watch the project directory and restart as necessary.


## Notes

This project was scaffolded from Fresh's own scaffold script referenced from the [Fresh docs](https://fresh.deno.dev/docs/getting-started/create-a-project).

I'm not particularly interested in learning Fresh so much as I am interested in figuring out what it looks like to build
and run a React project using Deno. Fresh was actually created by the Deno team and Deno recommends using Fresh. See this
page in the Deno docs: [*Using React with Deno*](https://deno.land/manual@v1.31.2/basics/react).

`index.ts`, `main.ts`, and `dev.ts`? A bit much right off the bat. I know it's a hard problem to solve, and maybe
impossible, but I'm looking for a true minimum React + TypeScript setup. I think esbuild might be the answer (looking
back at my previous work I think that's what I was leaning to the most).


# Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [ ] Move this project to a standalone repository. The IDE support (Intellij + the IDE plugin) doesn't work well with
  this setup. I'm getting import complaints and "Cannot find name 'React'".
* [ ] What is the static site story?
* [ ] Go through the rest of the [getting started guide](https://fresh.deno.dev/docs/getting-started/create-a-project).


## Reference

* [GitHub repo `dgroomes/deno-playground`](https://github.com/dgroomes/deno-playground)
  * A related project of mine.
