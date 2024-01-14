import React, {useEffect, useState} from "react";
import { mockFetch as fetch } from "./mockFetch";

const dieNumberToAsciiArt = {
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

export function DiceRoll() {
    console.log("[DiceRoll] Render function invoked.");
    const [diceRoll, setDiceRoll] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const rollDice = () => {
        setIsLoading(true);
        console.log("[DiceRoll] `useEffect` callback invoked. Making a 'fetch' request.");
        fetch('/dice-roll')
            .then(response => {
                console.log("[DiceRoll] `fetch` received a response.");
                return response.json();
            })
            .then(data => {
                setDiceRoll(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Unexpected error during fetch', error));
    };

    useEffect(rollDice, []); // Empty dependency array ensures this runs once on mount and not on every render

    if (isLoading) {
        return (
            <div className="dice-roll">
                <pre className="dice-roll-art">{loadingDieAsciiArt}</pre>
                <button disabled={true}>Rolling...</button>
            </div>
        );
    }

    return (
        <div className="dice-roll">
            <pre className="dice-roll-art">{dieNumberToAsciiArt[diceRoll]}</pre>
            <button onClick={rollDice}>Re-roll</button>
        </div>
    );
}
