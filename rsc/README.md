# rsc

A minimal Hello World example of React Server Components from first principles, **without using a meta-framework like Next.js**.


## Overview

React Server Components (RSC) are a new paradigm in React 19 that allows components to run exclusively on the server. This fundamentally changes how we think about React applications. Instead of everything running in the browser (or being server-side rendered and then hydrated), we now have three types of components:

1. **Server Components**: Run only on the server, have zero bundle impact, can directly access databases/APIs
2. **Client Components**: Traditional React components that run in the browser with hooks and interactivity
3. **Shared Components**: Can run in both environments (less common)

This example demonstrates the **core difference** between React 18 and React 19 with Server Components:

**React 18 and earlier:**
```jsx
// Everything runs in the browser (or is SSR'd and hydrated)
function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch from the browser
    fetch('/api/data').then(res => res.json()).then(setData);
  }, []);

  return <div>{data?.message}</div>;
}
```

**React 19 with Server Components:**
```jsx
// This runs ONLY on the server - never sent to the browser!
async function MyServerComponent() {
  // Direct database access - no API endpoint needed!
  const data = await db.query('SELECT message FROM ...');

  return <div>{data.message}</div>;
}
```

The key insight: **Server Components are async functions that execute on the server and stream their output to the client**. They never run in the browser, so their code (and dependencies!) have zero impact on bundle size.


## What Makes This Different from React 18?

In a traditional React 18 app:
- All components are client components
- Data fetching happens in `useEffect` or on the server via SSR
- The entire component tree is sent to the browser and hydrated
- Every library you import adds to your bundle size

With React Server Components (React 19):
- Server Components render on the server and stream to the client
- Server Components can be async and directly access backend resources
- Only Client Components (marked with `'use client'`) are sent to the browser
- Server Component dependencies have zero bundle impact
- Server and Client Components can be mixed in the same tree


## The Architecture

This example uses a minimal setup to illustrate the core concepts:

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  1. HTML loads with <script src="/client.js">    │     │
│  │  2. client.js fetches /rsc endpoint               │     │
│  │  3. Server streams RSC payload                    │     │
│  │  4. Client hydrates only the Client Components   │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                           ▲
                           │ RSC Payload (special format)
                           │
┌─────────────────────────────────────────────────────────────┐
│                      Node.js Server                          │
│  ┌────────────────────────────────────────────────────┐     │
│  │  ServerComponent.jsx (async function)             │     │
│  │    ├─ Fetches data from database/API              │     │
│  │    └─ Renders ClientComponent                     │     │
│  │                                                     │     │
│  │  renderToPipeableStream() serializes the tree     │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

**Key files:**
- `src/ServerComponent.jsx`: Async server component (runs on server only)
- `src/ClientComponent.jsx`: Interactive client component (marked with `'use client'`)
- `src/client.jsx`: Browser entry point that fetches RSC payload
- `server.js`: HTTP server with two endpoints:
  - `/` - Serves initial HTML
  - `/rsc` - Streams React Server Component payload
- `webpack.config.js`: Bundles client code


## Instructions

Follow these instructions to run the example:

1. Pre-requisite: Node.js
   * I used version 23.7.0
2. Install the dependencies
   * ```shell
     npm install
     ```
3. Build and start the server
   * ```shell
     npm start
     ```
4. Open the browser
   * Open <http://localhost:3000>
   * Observe the UI - you'll see:
     - A Server Component section (blue) with server-fetched data
     - A Client Component section (orange) with interactive buttons
   * Open DevTools → Network tab and refresh
     - Look at the `/rsc` request - this is the RSC payload!
     - It's a special serialized format, not HTML or JSON


## What to Observe

**In the UI:**
1. The Server Component displays a timestamp and message fetched on the server
2. The Client Component has interactive buttons that work immediately
3. Both are seamlessly rendered together

**In the browser DevTools:**
1. Network tab → Check the `/rsc` request
   - This is the serialized React tree streamed from the server
   - It's neither HTML nor JSON, but a special RSC format
2. Sources tab → Check `client.js`
   - Notice that `ServerComponent.jsx` code is NOT in the bundle!
   - Only `ClientComponent.jsx` is included
   - This demonstrates the zero-bundle-impact of Server Components

**Key insight**: The Server Component's code never reaches the browser. If you imported a large library (like marked for markdown, or a database client) in the Server Component, it would have zero impact on bundle size!


## First Principles: How RSC Works

React Server Components are built on a few core concepts:

### 1. The RSC Payload Format

When you fetch `/rsc`, you get a special serialized format. It looks something like:
```
M1:{"id":"./src/ClientComponent.jsx","chunks":[],"name":"default"}
J0:["$","div",null,{"children":[...]}]
```

This format:
- Uses special markers like `M1`, `J0` to denote module references and JSX elements
- References Client Components by ID (they're loaded separately)
- Serializes Server Component output (just the rendered result, not the code)
- Can be streamed incrementally

### 2. The Client-Server Boundary

The `'use client'` directive marks the boundary between server and client:
- Everything above the boundary runs on the server
- Everything below runs in the browser
- Server Components can import Client Components
- Client Components **cannot** import Server Components (but can receive them as props)

### 3. Async Components

Server Components can be async functions:
```jsx
async function ServerComponent() {
  const data = await fetchFromDatabase();
  return <div>{data}</div>;
}
```

This is not possible in traditional React! Client Components cannot be async (except with Suspense).

### 4. Zero Bundle Impact

Since Server Components never run in the browser:
- Their code is never sent to the client
- Their dependencies are never bundled
- Only their rendered output (the RSC payload) is transmitted
- This can dramatically reduce bundle size


## Comparison with Next.js

**This example (first principles):**
- ✅ Minimal setup - ~280 lines of code total
- ✅ No magic, every piece is visible
- ✅ Understanding of how RSC actually works
- ❌ No router, no file-based routing, no advanced features
- ❌ Manual webpack configuration
- ❌ Simple server, no optimizations

**Next.js (meta-framework):**
- ✅ Production-ready out of the box
- ✅ File-based routing, automatic code splitting
- ✅ Optimized bundling and streaming
- ❌ Abstracts away how RSC works
- ❌ Couples RSC with Next.js-specific features
- ❌ Harder to understand the fundamentals

This example is for **learning**. For production apps, use Next.js or another framework.


## Why This Matters

React Server Components represent a paradigm shift:

1. **Performance**: Server Components have zero JavaScript bundle cost
2. **DX**: Direct backend access without building APIs
3. **Security**: Sensitive code (API keys, database queries) stays on server
4. **Composition**: Mix server and client components naturally

This is not just "server-side rendering" (SSR). SSR renders HTML on the server and sends it to the client, then hydrates everything. With RSC:
- Server Components render on the server and stay there
- Only Client Components are hydrated
- You can refetch Server Components without losing Client Component state


## Limitations and Gotchas

1. **Client Components can't import Server Components**
   - But they can receive them as children or props

2. **Server Components can't use hooks**
   - No `useState`, `useEffect`, etc. (they run once on the server)

3. **The ecosystem is still maturing**
   - Not all libraries work with RSC
   - Bundler support is evolving

4. **You need a framework (or this setup) to use RSC**
   - RSC requires a bundler that understands the `'use client'` directive
   - And a server that can stream RSC payloads


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [ ] Add a more complex example with multiple Server Components
* [ ] Demonstrate Suspense boundaries with Server Components
* [ ] Show how to refetch Server Components on user action
* [ ] Add a "View Source" feature to see the RSC payload in the UI
* [ ] Demonstrate Server Actions (the write-side of RSC)
* [ ] Add error boundaries and error handling examples


## Reference

**Official React Documentation:**
* [React v19 Release Blog](https://react.dev/blog/2024/12/05/react-19)
  * Official announcement of React 19 with stable Server Components
* [Server Components Reference](https://react.dev/reference/rsc/server-components)
  * Official API documentation for Server Components
* [use client directive](https://react.dev/reference/rsc/use-client)
  * How to mark Client Components
* [use server directive](https://react.dev/reference/rsc/use-server)
  * How to create Server Actions (companion to Server Components)

**RFCs and Deep Dives:**
* [RFC: React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
  * Original RFC explaining the motivation and design
* [RSC From Scratch (Dan Abramov)](https://github.com/reactwg/server-components/discussions/5)
  * Step-by-step guide to building RSC from scratch (~280 lines)
* [How React Server Components Work (Plasmic Blog)](https://www.plasmic.app/blog/how-react-server-components-work)
  * Detailed explanation of the architecture

**First Principles Tutorials (without Next.js):**
* [React Server Components Without Frameworks (Daniel Ostapenko)](https://itnext.io/react-server-components-without-frameworks-7c61c1ce0561)
  * Jan 2025 tutorial with code examples
* [simple-rsc by Ben Holmes](https://github.com/bholmesdev/simple-rsc)
  * Minimal RSC implementation you can build yourself
* [rsc-demo by Matthias Le Brun](https://github.com/ziir/rsc-demo)
  * Another minimal RSC example without frameworks

**Conceptual Understanding:**
* [Making Sense of React Server Components (Josh W. Comeau)](https://www.joshwcomeau.com/react/server-components/)
  * Excellent visual explanation of how RSC works
* [The Two Reacts (Dan Abramov)](https://overreacted.io/the-two-reacts/)
  * Mental model for thinking about server vs client React

**Package Documentation:**
* [react-server-dom-webpack](https://www.npmjs.com/package/react-server-dom-webpack)
  * The package that makes this all work
