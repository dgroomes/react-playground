import React, {useEffect, useState} from "react";
import delay from "./delay";

const frames = ['Loading...', 'Loading.', 'Loading..']
const framesSize = frames.length

/**
 * A super primitive loading component.
 */
export function Loading() {
    console.debug(`Render: ${new Date().toISOString()}`)
    const [frameIndex, setFrameIndex] = useState(0);
    const frame: string = frames[frameIndex];
    useEffect(() => {

        // I want to write code in the async/await style, but unfortunately you can't simply "async-ify" the arrow function
        // you pass to the hook function, like "useEffect". This is a common question. See https://github.com/facebook/react/issues/14326
        // The suggested workaround from the React core team is to create another level of indirection. Specifically,
        // create a named async function and then invoke it and ignore the returned Promise object. Unfortunately, this
        // makes the IDE complain "Promise returned from [function call] is ignored".
        async function animateNextFrame() {
            console.debug(`Animate start: ${new Date().toISOString()}`)
            await delay(333)

            // This can't be declared 'const' I guess because TypeScript can't tell that the if/else is exhaustive.
            // I'm surprised by this.
            let newFrameIndex: number

            if (frameIndex === framesSize - 1) {
                // We've reached the end of the frames. Let's start over from the beginning.
                newFrameIndex = 0
            } else {
                newFrameIndex = frameIndex + 1
            }

            console.debug(`Animate end: ${new Date().toISOString()}`)
            setFrameIndex(newFrameIndex)
        }

        animateNextFrame()
    });

    return <div>{frame}</div>
}
