import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function News() {
    console.log("[News] Render function invoked.");
    const [newsData, setNewsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("[News] `useEffect` callback invoked. Making a 'fetch' request.");
        fetch('/front-page-news.json')
            .then(data => {
                // Simulate a delay in the API response
                return new Promise(resolve => setTimeout(() => resolve(data), 2500));
            })
            .then(response => {
                console.log("[News] `fetch` received a response.");
                return response.json();
            })
            .then(data => {
                setNewsData(data);
                setIsLoading(false);
            })
            .catch(error => console.error('Unexpected error during fetch', error));
    }, []); // Empty dependency array ensures this runs once on mount and not on every render

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {newsData.headlines.map((headline, index) => (
                <div key={index}>
                    <h2>{headline.title}</h2>
                    <p>{headline.summary}</p>
                </div>
            ))}
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <News />
    </React.StrictMode>
);
