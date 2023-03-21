import React from 'react'
import ReactDOM from 'react-dom/client'

export function Main() {
    return (<>
        <h1>Learning by Example: React Hooks</h1>
        See the <a href="https://github.com/dgroomes/react-playground/tree/main/hooks">README</a> in
        the <em>dgroomes/react-playground</em> repository for more information.

        <div id="container">
            <div className="item" id="inefficient-use-effect">
                <iframe src="inefficient-use-effect-index.html" width="100%" height="100%"></iframe>
            </div>
            <div className="item" id="efficient-use-effect">
                <iframe src="efficient-use-effect-index.html" width="100%" height="100%"></iframe>
            </div>
        </div>
    </>)
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<Main/>);
