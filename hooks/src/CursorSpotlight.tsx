import React, {useState} from "react";
import {useWindowListener} from "./useWindowListener";

/**
 * This has a spotlight effect that follows the cursor. A colorful spotlight follows your cursor around.
 *
 * This is copied almost verbatim from the React docs: https://react.dev/reference/react/useEffect#examples-custom-hooks
 */
export function CursorSpotlight() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useWindowListener('pointermove', (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    });

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x - 10}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }}/>
    );
}
