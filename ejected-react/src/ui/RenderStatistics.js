import React from "react";

// I can't figure out how to use useState instead of an instance of RenderStatistics because I get an infinite re-render loop.
export class RenderStatistics {
    #renderCount = 0;

    constructor() {
        this.incrementRenderCount = this.incrementRenderCount.bind(this);
    }

    incrementRenderCount() {
        this.#renderCount++;
    }

    get renderCount() {
        return this.#renderCount;
    }
}

export const RenderStatisticsContext = React.createContext(null);
