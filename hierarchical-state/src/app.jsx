import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

/**
 * This mocks the 'fetch' API and simulates an HTTP request to some API that returns an array of three random numbers.
 * It also simulates a delay in the response.
 */
function mockFetch(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve([
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100)
                ])
            });
        }, 1500);
    });
}

const fetch = mockFetch;

function LuckyNumbers() {
    console.log("[LuckyNumbers] Render function invoked.");
    const [luckyNumbers, setLuckyNumbers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("[LuckyNumbers] `useEffect` callback invoked. Making a 'fetch' request.");
        fetch('/lucky-numbers')
            .then(response => {
                console.log("[LuckyNumbers] `fetch` received a response.");
                return response.json();
            })
            .then(data => {
                setLuckyNumbers(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Unexpected error during fetch', error));
    }, []); // Empty dependency array ensures this runs once on mount and not on every render

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Lucky Numbers</h2>
            {luckyNumbers.map((number, index) => (
                <p key={index}>{number}</p>
            ))}
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <LuckyNumbers/>
    </React.StrictMode>
);
