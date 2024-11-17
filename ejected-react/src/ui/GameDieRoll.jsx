import React from "react";
import {useGeneration} from "./hooks";

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
export const GameDieRoll = React.memo(({obj}) => {
    const {id, faceValue, lifecyclePhase} = obj;
    useGeneration(`GameDieRoll#${id}`, obj);

    if (lifecyclePhase === "fetching") {
        return (
            <div className="game-die-roll">
                <pre className="game-die-roll-art">{loadingDieAsciiArt}</pre>
                <button disabled={true}>Rolling...</button>
            </div>
        );
    }

    return (
        <div className="game-die-roll">
            <pre className="game-die-roll-art">{gameDieNumberToAsciiArt[faceValue]}</pre>
            <button onClick={obj.roll}>Re-roll</button>
        </div>
    );
});
