import React from "react";
import {GameDieRoll} from "./GameDieRoll";
import {useGeneration} from "./hooks";

export function App({appContainer}) {
    useGeneration("App", appContainer);

    const dice = [];
    for (let obj of appContainer.gameDieRolls) {
        dice.push(<GameDieRoll key={obj.id} obj={obj}/>);
    }

    return (
        <>
            <button onClick={appContainer.addGameDieRoll}>Add another roll 🎲</button>
            <hr/>
            {dice}
        </>
    );
}
