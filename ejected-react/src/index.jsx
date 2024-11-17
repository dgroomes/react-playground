import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {AppContainer} from "./organic-js/AppContainer";
import {App} from "./ui/App";
import {GameDieApiClient} from "./organic-js/GameDieApiClient";
import {RenderStatistics, RenderStatisticsContext} from "./ui/RenderStatistics";
import {OrganicStatistics} from "./organic-js/OrganicStatistics";
import {Statistics} from "./ui/Statistics";

// Plain organic JavaScript Code. This is the "headless" part of the application.
const organicStatistics = new OrganicStatistics();
const delay = 1000;
const gameDieApiClient = new GameDieApiClient(delay, organicStatistics);
const appContainer = new AppContainer(gameDieApiClient, organicStatistics);
appContainer.addGameDieRoll();

// Wire in React. Notice how we bridge the two worlds by passing a reference to the appContainer as a React prop.
const renderStatistics = new RenderStatistics(); // inline as default value
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <StrictMode>
        <RenderStatisticsContext.Provider value={renderStatistics}>
            <Statistics organicStatistics={organicStatistics}/>
            <App appContainer={appContainer}/>
        </RenderStatisticsContext.Provider>
    </StrictMode>);
