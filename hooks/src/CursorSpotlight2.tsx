import React, {useCallback, useState} from "react";
import {useWindowListener} from "./useWindowListener";

/**
 * This is like CursorSpotlight, but it should be more efficient because it doesn't re-register a new listener function
 * on every render. The trick is to use "useCallback" which memoizes the function.
 */
export function CursorSpotlight2() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useWindowListener('pointermove', useCallback((e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }, []));

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'blueviolet',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x + 10}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }}/>
    );
}
