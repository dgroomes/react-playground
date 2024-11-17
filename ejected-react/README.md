# ejected-react

An example program that largely *ejects* from React. Let's use React as a rendering library and not a framework.


## Overview

React was founded on the selling point of developer experience: JSX and reactive DOM updates. Indeed, the demo React
programs found in places like the [React Docs](https://react.dev/learn) are pretty awesome, and we love when a tool
enables us take a programming project from zero to something. This principle is true across all programming toolchains,
languages and frameworks. When these type of "quick start" tools don't exist, we might not even try to learn something
new, and that's a shame. For example, I'm too scared to ever try CUDA programming, and I'm afraid of CMake.

> React, its documentation, and its web footprint have made React a great way to get started doing interesting things in a UI. 

But as we go from "something working" to "something interesting", we face a different kind of challenge. The complexity
of our feature set weighs on us, and this compounds with the complexity of our dependencies and the design accidents
we've accumulated in our code. We don't need a "quick start" tool anymore we need a whole tool belt of things for
managing complexity. These things are sometimes libraries and frameworks, sometimes behaviors, sometimes money,
sometimes people, sometimes luck, sometimes timing, and sometimes just a good night's sleep.

This project is an example where we use React as a "quick start" tool to get us something working, but we eject from it
when it comes to growing the program. The code grows organically outside of React, and it of course also grows in the
UI-specific changes and new features. I've structured this codebase to make it clear that "yes, it's possible to not
have to write every new line of code inside a React component":

* `src/organic-js`
  * This defines the shape and behavior of a "dice rolling" program. The code here is [headless](https://en.wikipedia.org/wiki/Headless_software),
    and it doesn't even know about React. It never imports React. The code encapsulates the complexity of making HTTP
    requests and managing a dynamic collection of dice rolls. But, it does need some glue code to publish signals so that
    the React code can subscribe to it.
* `src/ui`
  * This is the React code. It has all the JSX code we need to express the UI and glue code to subscribe to the organic
    side. But, it doesn't need to make much use of React Hooks. It delegates to the organic JavaScript code for the heaving lifting
    of making state transitions and owning the lifecycle of effect-ful code. I don't want fifty line `useEffect` callbacks.
    I've already spent my complexity budget on JSX.

The bridge between the world of organic JavaScript code and the world of React code is a "signals" convention. Objects
in the organic JavaScript code can emit a signal, which is wired into React's state management, and these signals
trigger a render. No extra frameworks or libraries are needed.


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
    * Open <http://[::1]:8000>
    * Look at the UI, iterate on the code, refresh the page, and repeat.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [x] DONE Scaffold the program
* [ ] ABANDON (I've pivoted, and I'm experimenting with externalized state, specifically the tracking of my own fetch requests. Maybe this subproject should be called "externalized-state") Make some hierarchical state thing and then can we reproduce the double fetching problem? And then solve it with
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
* [x] DONE (I turned this into an "ejected" design) Experiment with externalized state. Can I "bring my own state" to React? Do I have to delegate to `useState`? Can I not just tell React, hey synchronize
  on this state now and render everything again? So React needs like a plain old object of primitives, arrays and objects
  for its state because it does a diffing algorithm on it to figure out renders and stuff. That makes sense. I still want
  a normal object graph to implement non-primitive stuff though, like active fetch requests (Promise objects for example).
  What could that look like? In any program, there is an object graph. Even in a C program, there is a graph of structs
  and pointers. In my JavaScript program in this subproject, my object graph contains game die roll face values 🎲, fetch
  requests, and a huge amount of non-domain things like React software machinery. I won't relegate this object graph in
  favor of a React state tree. I'll use both. Let's see what we can do. UPDATE: Here's how I'm thinking about it. React
  started with a class model and this lasted until 2019 with React 16.8.0. The React team seemed to really want to "get
  closer to pure functional programming" and I think they kind of conflated that notion with the idea of just having a
  higher ratio of functions to other kinds of code (like classes). But function components, while functions, are of
  course chock-full of side effects because of hooks (`useState`, `useEffect`, etc.). Function components are doing
  heavy-lifting. Can we fulfill the React team's desire to not have classes with my own desire to understand and write
  my program using organic JavaScript code? Let's see. Imagine a spectrum of "original class-based React" as in the middle,
  then on the right is "React with hooks (somehow heavier weight than classes)" and now we're exploring the left side of
  the spectrum which is also "React without React classes, and instead only React functions but the outside code is
  whatever it wants (like classes)". React warns against using mutable objects and says things like ["Do not overuse refs"](https://react.dev/reference/react/forwardRef),
  but I want to program with a rich object graph. So that's what I'm going to try.
    * DONE (it works to my surprise) Create the object graph. Just an object for now. We'll call this the application container (like in other
      frameworks and software cultures).
    * DONE More object-oriented (this is just my own preference. The JavaScript program that lives outside of React can be
      whatever shape). Specifically make a class for the GameDieRoll.
    * DONE Push serialization into GameDieRoll class
    * DONE Split out App into its own component? Can I make `inded.jsx` into a non-JSX file and keep it in the root?
    * DONE Abstract out a client
    * DONE Parameterize object wiring and simulated delay.
    * DONE Do we really need useRef when passing props? Can I not just pass any old object I want? Again, I'm curious about
      React's diffing/reconciliation algorithm.
    * SKIP (I'm already able to narrow down the scope from parent to subcomponents) Try out a provider/context thing? Maybe a class component for App? Maybe not.
    * DONE Create a Statistics component. I want to see fetches and renders. This is going to be a bit tricky because we need
      to avoid an infinite loop. I think it might be interesting also because I don't care to have a matching Statistics
      domain class. The stats are inferred from the GameDiApiClient and maybe the AppContainer? I also want signals calls
      I think.
    * DONE Move the render statistics code into `ui`. Interesting stuff. I already was tempted to conflate the organic JavaScript
      code with the rendering code, but I realized the mistake. It's nice to have the option to keep them separate, but
      it's hard to get it right the first time. I need a provider/context I think.
* [x] DONE Can we get finer-grained reactivity? I've tried this a few times, but it's hard. I can't get a clear
  answer on how React decides to call a component's render function again. Specifically, how can we get only the GameDieRoll
  component that is being re-rolled to re-render and not the other ones? Update: the trick is memoization and cheating
  around state for oddities like the "renderCount".
  * DONE (maybe I'll re-think this but I just need dumb window code for now) I think I need to do away with the Statistics provider/hook
  * DONE Memoize
  * DONE Don't serialize the full GameDieRoll data in the parent/app-container serialized state. I'm reminded again that the
    style of state management I'm doing is identity-based. Another way of thinking about this demo project is "identity-based
    state management"
  * DONE (wow works nicely) Explore the idea of a "generation" signal strategy. Is this like dirty-checking? Update: maybe just key off
    signal count for now. A "new generation" is technically narrow, it's if something is definitely changed. 
* [x] DONE Source maps.
* [x] DONE Consider a "useGeneration" hook which encapsulates the logging string interpolation and stuff.
* [x] DONE (I just had to give it a second iteration on my original idea and now it's good) Re-think the statistics sub-system. Maybe make a separate React render root? That way I can avoid the infinite
  loop dependency relationship.
  * Can I get the provider without the `new RenderStatistics()` call?
* [x] DONE Try one more time to "thin down to" the "generation / update generation" pattern. No need for a bridge object,
  maybe just inline "generation" as a convention in the organic code? I'd hate to accidentally introduce a coupling
  that isn't necessary.
* [ ] Consider changing the project name to "mutable-react". I wonder which name is stickier.


## Reference

* [React Docs: *Managing State*](https://react.dev/learn/managing-state)
* [React Docs: *Referencing Values with Refs*](https://react.dev/learn/referencing-values-with-refs)
   *  > When you want a component to “remember” some information, but you don’t want that information to trigger new renders,
        you can use a ref.
        ...
        You can access the current value of that ref through the `ref.current` property. This value is intentionally mutable,
        meaning you can both read and write to it.
        ...
        This is what makes it an “escape hatch” from React’s one-way data flow
