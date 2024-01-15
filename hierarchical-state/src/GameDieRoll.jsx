import React, {useEffect, useState} from "react";
import { mockFetch as fetch } from "./mockFetch";

const gameDieNumberToAsciiArt = {
    1: `
+-------+
|       |
|   o   |
|       |
+-------+
`,
    2: `
+-------+
| o     |
|       |
|     o |
+-------+
`,
    3: `
+-------+
| o     |
|   o   |
|     o |
+-------+
`,
    4: `
+-------+
| o   o |
|       |
| o   o |
+-------+
`,
    5: `
+-------+
| o   o |
|   o   |
| o   o |
+-------+
`,
    6: `
+-------+
| o   o |
| o   o |
| o   o |
+-------+
`
};

const loadingDieAsciiArt = `
+-------+
| ?   ? |
|   ?   |
| ?   ? |
+-------+
`;

/**
 * A game die ("die" as in dice 🎲). It can be re-rolled by clicking a button.
 */
export function GameDieRoll(props) {
    console.log("[GameDieRoll] Render function invoked.");
    const [gameDieRoll, setGameDieRoll] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // This isn't right, I can't use this as a click handler because it basically makes a fetch outside of a useEffect
    // callback, right? Again, I'm not sure how to do basic React programming.
    const rollDice = () => {
        props.incrementFetchCount();
        setIsLoading(true);
        console.log("[GameDieRoll] `useEffect` callback invoked. Making a 'fetch' request.");
        fetch('/dice-roll')
            .then(response => {
                console.log("[GameDieRoll] `fetch` received a response.");
                return response.json();
            })
            .then(data => {
                setGameDieRoll(data);
                setIsLoading(false);
            });
    };

    useEffect(rollDice, []); // Empty dependency array ensures this runs once on mount and not on every render

    if (isLoading) {
        return (
            <div className="game-die-roll">
                <pre className="game-die-roll-art">{loadingDieAsciiArt}</pre>
                <button disabled={true}>Rolling...</button>
            </div>
        );
    }

    return (
        <div className="game-die-roll">
            <pre className="game-die-roll-art">{gameDieNumberToAsciiArt[gameDieRoll]}</pre>
            <button onClick={rollDice}>Re-roll</button>
        </div>
    );
}
