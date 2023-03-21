import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom/client"

// The 'statistics' tracking is purposely done outside of React so we avoid conflating the state management of these
// statistics with the state management in the example.
const statistics = {
    eventListenersAdded: 0,
    eventListenersRemoved: 0
}

function drawStatistics() {
    document.getElementById("event-listeners-added").innerText = statistics.eventListenersAdded.toString()
    document.getElementById("event-listeners-removed").innerText = statistics.eventListenersRemoved.toString()
}

/**
 * This program creates a spotlight effect that follows the cursor. A colorful spotlight follows your cursor around. This is
 * implemented inefficiently because it re-registers a new listener function on every render. This is expensive! Compare
 * this implementation with the one in 'efficient-use-effect/app.tsx'.
 *
 * This example is adapted from the React docs: https://react.dev/reference/react/useEffect#examples-custom-hooks
 */
export function Main() {
    const [position, setPosition] = useState({x: 0, y: 0})

    const listener = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
            statistics.eventListenersAdded++
            drawStatistics()
            window.addEventListener('pointermove', listener)
            return () => {
                statistics.eventListenersRemoved++
                drawStatistics()
                window.removeEventListener('pointermove', listener)
            }
        },
        // The dependencies array here describes, "Hey React, please re-run this effect when the eventType or listener changes."
        // Be very careful when you use non-primitive types, like functions and objects, in the dependencies array. Every
        // function is different from every other function, even if the function bodies are the result of copy/paste.
        // React use the "Object.is" method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
        // to compare the old and new values of the dependencies array.
        [listener])

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }}/>)
}

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(<Main/>)
