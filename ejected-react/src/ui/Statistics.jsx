import React, {useEffect, useState} from "react";
import {RenderStatisticsContext} from "./RenderStatistics";

/**
 * The statistics component incorporates statistics from the organic JavaScript code world, like fetch count, and
 * statistics from the React world, like render count.
 *
 * The statistics will help you understand what the program is doing. In particular, I like to see how when I click a
 * button, it triggers an HTTP request and multiple React renders.
 */
export function Statistics({organicStatistics}) {
    console.log("[Statistics] - Render invoked.");
    const [_generation, setGeneration] = useState(organicStatistics.generation);
    const {renderCount} = React.useContext(RenderStatisticsContext);
    organicStatistics.bindSignal(setGeneration);

    return (
        <div className={"statistics"}>
            <div><pre>fetch</pre>calls: {organicStatistics.fetchCalls}</div>
            <div><pre>signal</pre>calls: {organicStatistics.signalCalls}</div>
            <div>Render function calls (beside this one): {renderCount}</div>
        </div>
    )
}
