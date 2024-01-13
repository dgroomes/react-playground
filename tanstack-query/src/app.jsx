import React, {useCallback} from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider, useQuery,} from '@tanstack/react-query';

const queryClient = new QueryClient();

function News() {
    console.log("[News] Render function invoked.");
    const {status, data, dataUpdatedAt, error, isFetching} = useQuery({
        queryKey: ['front-page-news'],
        queryFn: async () => {
            console.log("[queryFn] invoked.");

            // Simulate a delay in the API response
            await new Promise(resolve => setTimeout(() => resolve(), 2500));

            return await fetch('/front-page-news.json').then(res => res.json());
        },
    });

    const refreshData = useCallback(() => {
        // noinspection JSIgnoredPromiseFromCall
        queryClient.invalidateQueries('front-page-news');
    }, []);

    if (status === "pending") {
        return <div>Loading...</div>;
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            {data.headlines.map((headline, index) => (
                <div key={index}>
                    <h2>{headline.title}</h2>
                    <p>{headline.summary}</p>
                </div>
            ))}
            <button onClick={refreshData} disabled={isFetching}>
                Refresh {isFetching ? "(loading...)" : ""}
            </button>
            <p style={{color: '#888'}}>Last fetched at {new Date(dataUpdatedAt).toLocaleString()}</p>
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <News/>
        </QueryClientProvider>
    </React.StrictMode>
);
