# vite

A React project built with [Vite](https://vitejs.dev/). It features TypeScript.


## Overview

I scaffolded this project with npm's awesome [`init` command](https://docs.npmjs.com/cli/v8/commands/npm-init) in combination
with Vite's `init` *initializer* which let me easily declare "I want a React and TypeScript project". Very cool. I wish
Gradle had this feature. I'm sure they have been thinking about it for a long time and will one day get it. Here is the
related [Gradle feature request](https://github.com/gradle/gradle/issues/1686).


## Instructions

Follow these instructions to build and serve the app:

1. Pre-requisite: Node.js
   * I used version 20.17.0
2. Install dependencies:
   * ```shell
     npm install
     ```
3. Run the server:
   * ```shell
     npm run dev
     ```
4. Open the browser:
   * <http://localhost:5173/>


## Notes

Vite is nice. Vite uses esbuild though? In my continual quest to prevent and reduce complexity, I feel like I should use
esbuild directly. And it's also a little surprising that esbuild is still a 0.x release. In a lot of cases, 0.x is
actually very stable and for whatever reason the authors haven't prioritized a 1.0 release (as is their right), but this
makes it harder to commit at face value.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [ ] What is the Vite way to do CSS? Do we bundle the CSS into the JavaScript bundle file (the Webpack way)? 
* [x] DONE Upgrade React
* [x] DONE Upgrade to Vite 3.x
  * Very cool that there is a migration guide. The documentation culture of front-end open source is very good.
    Link: <https://v3.vitejs.dev/guide/migration.html>. It's interesting that there are entirely different Vite doc
    sites. That means it reduces that chances of link rot.
  * What version of the Vite React plugin scales with a Vite 3.x migration? I don't want to overshoot. UPDATE: this is
    frustrating the npm page only has 3.x and the GitHub repo only has 3.x releases. I'm assuming there existed a 2.x
    line, but I can't even find the 1.x line release notes. I'll jump straight to 3.x when I upgrade to Vite 4.
* [x] DONE Upgrade to Vite 4.x.
* [x] DONE Upgrade to Vite 5.x
   * <https://v5.vite.dev/guide/migration.html>
* [x] DONE Upgrade to Vite 6.x


## Reference

* [Vite](https://github.com/vitejs/vite)
