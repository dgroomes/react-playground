import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { GameDieRoll } from './GameDieRoll';


function App() {
    const [diceCount, setDiceCount] = useState(1);
    const [fetchCount, setFetchCount] = useState(0);

    const addGameDieRoll = useCallback(() => {
        setDiceCount(diceCount + 1);
    }, [diceCount]);

    const incrementFetchCount = useCallback(() => {
        setFetchCount(i => i + 1);
    }, []);

    const dice = [];
    for (let i = 0; i < diceCount; i++) {
        dice.push(<GameDieRoll key={i} incrementFetchCount={incrementFetchCount}/>); // How does this work? When a property changes what does React do? I'm not even asking the question clearly.
    }

    return (
        <>
            <button onClick={addGameDieRoll}>Add another roll 🎲</button>
            <div className={"statistics"}>The <pre>fetch</pre> function has been called {fetchCount} times</div>
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
