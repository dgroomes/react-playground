import React from 'react'
import ReactDOM from 'react-dom/client'

import {Grid} from '@githubocto/flat-ui';

const MyComponent = () => {
    const data = [{column1: 123}, {column1: 234}];

    return <Grid data={data}/>;
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<MyComponent/>);
