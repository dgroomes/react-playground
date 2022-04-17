import * as _ from "lodash";
import React from 'react';

/**
 * This is a React "function" component. By contrast, you can define React components as classes but that style is not
 * favored, especially since React *Hooks* were introduced in React 16.8 in 2019.
 * @constructor
 */
export function Greeting() {
    return (
        <div>
            {_.join(['Hello', 'from', "'react-playground/webpack'", '!'], ' ')}
        </div>);
}
