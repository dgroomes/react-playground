import React from 'react'
import ReactDOM from 'react-dom/client'

function ProjectHeader() {
    return (<>
        <h1>Learning *esbuild*</h1>
        This is a single-page-application (SPA) implemented in React and TypeScript and built with <a
        href="https://esbuild.github.io/">esbuild</a>.
        See the <a href="https://github.com/dgroomes/react-playground/tree/main/esbuild">README</a> for more
        information!
    </>)
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<ProjectHeader/>);
