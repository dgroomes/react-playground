import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {Grid} from '@githubocto/flat-ui';

const MyComponent = () => {
    const [zips, setZips] = useState(null)

    useEffect(() => {
        async function fetchZips() {
            const response = await fetch("http://[::1]:8000/zips.jsonl")
            const zipsJsonLines: string = await response.text()
            const zips = zipsJsonLines
                .slice(0, -1) // there is a trailing newline in the response. Cut it out so we have pure lines of JSON.
                .split('\n')
                .map(function parseJson(json) {
                    try {
                        return JSON.parse(json);
                    } catch (e) {
                        console.error(`Failed to parse JSON: '${json}'. Exception was ${e}`)
                        return null
                    }
                })
                .filter(obj => obj !== null)
            setZips(zips)
        }

        // noinspection JSIgnoredPromiseFromCall
        fetchZips()
    }, [])

    if (zips === null) {
        return <div>Loading...</div>
    }

    return <Grid data={zips}/>;
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<MyComponent/>);
