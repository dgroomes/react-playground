# rsc

A minimal React Server Components example for static site generation. No HTTP server, no build tools, no frameworks.


## Overview

React Server Components (RSC) in React 19 introduce async components that can run at build time. This example demonstrates
the simplest possible RSC setup: an async component that fetches data during the build and renders to static HTML.

The key difference from React 18:

    ```jsx
    // React 18 - components can't be async
    function MyComponent() {
      const [data, setData] = useState(null);
      useEffect(() => {
        fetch('/api/data').then(setData);
      }, []);
      return <div>{data?.message}</div>;
    }

    // React 19 - Server Components can be async
    async function MyServerComponent() {
      const data = await fetch('/api/data').then(r => r.json());
      return <div>{data.message}</div>;
    }
    ```

In this example, the async Server Component executes at build time, fetches data, and renders to a single
`dist/index.html` file. No server needed at runtime.


## Instructions

Follow these instructions to build the static site:

1. Pre-requisite: Node.js
   * I used version 23.7.0
2. Install the dependencies
    * ```shell
      npm install
      ```
3. Build the static site
    * ```shell
      npm run build
      ```
4. Open the result
    * ```shell
      open dist/index.html
      ```
    * Notice the timestamp in the HTML - it's from build time. The async component executed during the build.


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [ ] Add an example that reads from the filesystem (showing direct backend access)
* [ ] Demonstrate multiple pages/routes
* [ ] Show how Client Components would work with hydration


## Reference

* [React v19](https://react.dev/blog/2024/12/05/react-19)
* [Server Components reference](https://react.dev/reference/rsc/server-components)
* [RFC: React Server Components](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md)
* [RSC From Scratch by Dan Abramov](https://github.com/reactwg/server-components/discussions/5)
  * The inspiration for this example, though this implementation is much simpler (no bundler, no client components)
