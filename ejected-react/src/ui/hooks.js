import {useContext, useState} from "react";
import {RenderStatisticsContext} from "./RenderStatistics";

/**
 * Bind the React component to the organic JavaScript program via an object
 * that implements the generational convention. Also, record that a render occurred in the statistics sub-system.
 * @param description For example "App" or "GameDieRoll#3"
 * @param generational - An object that implements the convention of having a "bindSignal" method and a "generation" getter.
 * @return {number} the generation number. This might be useful for debugging, but the generation is already logged.
 */
export function useGeneration(description, generational) {
    const renderStatistics = useContext(RenderStatisticsContext);
    const [generation, setGeneration] = useState(generational.generation);
    renderStatistics.incrementRenderCount();
    console.log(`[${description} / gen#${generation}] - Render invoked.`);

    generational.bindSignal(setGeneration);
    return generation;
}
