import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { GameDieRoll } from './GameDieRoll';


function App() {
    const [diceCount, setDiceCount] = useState(1);

    const addGameDieRoll = useCallback(() => {
        setDiceCount(diceCount + 1);
    }, [diceCount]);

    const dice = [];
    for (let i = 0; i < diceCount; i++) {
        dice.push(<GameDieRoll key={i}/>);
    }

    return (
        <>
            <button onClick={addGameDieRoll}>Add another roll 🎲</button>
            <hr/>
            {dice}
        </>
    );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
