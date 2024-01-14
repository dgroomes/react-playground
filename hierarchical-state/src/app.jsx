import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { DiceRoll } from './DiceRoll';


function App() {
    const [diceCount, setDiceCount] = useState(1);

    const addDice = useCallback(() => {
        setDiceCount(diceCount + 1);
    }, [diceCount]);

    const diceRolls = [];
    for (let i = 0; i < diceCount; i++) {
        diceRolls.push(<DiceRoll key={i}/>);
    }

    return (
        <>
            <button onClick={addDice}>Add Dice</button>
            <hr/>
            {diceRolls}
        </>
    );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
