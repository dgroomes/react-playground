# rsc

A minimal React Server Components example for **static site generation**. No HTTP server, no frameworks, just RSC fundamentals.


## Overview

React Server Components (RSC) in React 19 introduce **async components** that can run at build time (or request time). This example demonstrates the simplest possible RSC setup: generating static HTML at build time.

**The key difference from React 18:**

```jsx
// React 18 - components can't be async
function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(setData);
  }, []);
  return <div>{data?.message}</div>;
}

// React 19 - Server Components can be async!
async function MyServerComponent() {
  const data = await fetch('/api/data').then(r => r.json());
  return <div>{data.message}</div>;
}
```

**In this example:**
- `ServerComponent.jsx` is an **async** component that fetches data at build time
- The build script (`build.js`) awaits the component and renders it to static HTML
- Output: a single `dist/index.html` file ready to deploy

No server needed at runtime - just static files!


## Instructions

1. Pre-requisite: Node.js (I used 23.7.0)
2. Install dependencies:
   ```shell
   npm install
   ```
3. Build the static site:
   ```shell
   npm run build
   ```
4. Open the result:
   ```shell
   open dist/index.html
   ```

Notice the timestamp in the HTML - it's from build time, not runtime. The async Server Component executed during the build!


## What's Happening

1. **build.js** imports `ServerComponent` (an async function)
2. It awaits the component: `await ServerComponent()`
   - This runs the async data fetching
   - Returns a React element tree
3. React's `renderToString()` converts it to HTML
4. The HTML is written to `dist/index.html`

**Key insight:** Server Components run at build time (or request time), not in the browser. Their code never gets sent to the client.


## Architecture

```
Build Time:
  ┌─────────────────────────────────────┐
  │  build.js                           │
  │    ├─ import ServerComponent        │
  │    ├─ await ServerComponent()       │
  │    │    └─ async data fetching      │
  │    ├─ renderToString(element)       │
  │    └─ write dist/index.html         │
  └─────────────────────────────────────┘

Runtime:
  ┌─────────────────────────────────────┐
  │  Just serve dist/index.html         │
  │  No server, no React, no JavaScript │
  └─────────────────────────────────────┘
```


## Why This Matters

React Server Components enable:

1. **Async components** - directly fetch data in component body
2. **Build-time execution** - for SSG, components run during build
3. **Zero bundle impact** - Server Component code never sent to client
4. **Direct backend access** - read files, query databases, no API needed

This is fundamentally different from traditional React:
- Not just SSR (Server-Side Rendering)
- Not just SSG (though this example does SSG)
- A new component type that runs separately from client components


## Comparison with Meta-Frameworks

**This example (first principles):**
- ✅ ~100 lines total
- ✅ Pure SSG, no server at runtime
- ✅ Shows exactly how RSC works
- ✅ No magic, no abstraction
- ❌ No hydration/interactivity (though RSC supports it)
- ❌ No routing, no advanced features

**Next.js/other frameworks:**
- ✅ Full-featured, production-ready
- ✅ Handles client hydration, routing, etc.
- ❌ Abstracts away how RSC works
- ❌ Couples RSC with framework features

Use this to **learn**. Use frameworks for **production**.


## What About Client Components?

In a full RSC setup, you'd have:
- Server Components (async, run on server/build time)
- Client Components (marked with `'use client'`, hydrated in browser)

This minimal example focuses on the **core RSC innovation**: async components that run at build time. Client component hydration adds complexity and requires:
- Bundling client code separately
- Including React in the browser
- Hydration logic
- Reference resolution between server/client components

See Dan Abramov's ["RSC From Scratch"](https://github.com/reactwg/server-components/discussions/5) for a full implementation including client components.


## Reference

**Official React Docs:**
- [React v19 Release](https://react.dev/blog/2024/12/05/react-19) - Server Components are now stable
- [Server Components Reference](https://react.dev/reference/rsc/server-components) - API documentation
- [RFC: React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md) - Original design

**First Principles Tutorials:**
- [RSC From Scratch (Dan Abramov)](https://github.com/reactwg/server-components/discussions/5) - ~280 line implementation
- [Making Sense of React Server Components (Josh W. Comeau)](https://www.joshwcomeau.com/react/server-components/) - Visual explanation
- [React Server Components Without Frameworks](https://itnext.io/react-server-components-without-frameworks-7c61c1ce0561) - Alternative tutorial
