import React, {useEffect, useState} from 'react';
import httpGetMessage from './mock-api';
import {Loading} from './Loading';

/**
 * This is a React "function" component. By contrast, you can define React components as classes but that style is not
 * favored, especially since React *Hooks* were introduced in React 16.8 in 2019.
 * @constructor
 */
export function Greeting() {
    const [message, setMessage] = useState(null);

    // I'm not 100% sure how to use effects yet. I need to make an HTTP request and I'm pretty sure that I should write
    // the fetch code in a 'useEffect' callback because running that code from any other context seems to be off-limits
    // in React. For example, the React docs say: "don't subscribe to things during the 'render' procedure otherwise
    // you'll get weird UI bugs".
    //
    // I think "useEffect" is correct, but how do I make sure the fetch only happens once? I don't want it to be triggered
    // multiple times. That's wasteful (and confusing). Is providing an empty array as the second arg the right way to
    // do it?
    useEffect(() => {
        httpGetMessage().then(setMessage)
    }, []);

    if (message == null) {
        return <Loading />
    } else {
        return <div>{message}</div>
    }
}
