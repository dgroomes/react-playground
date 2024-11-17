export class OrganicStatistics {
    #fetchCalls = 0;
    #signalCalls = 0;
    #signalRef = null;
    #generation = 0;

    constructor() {
        this.incrementFetchCalls = this.incrementFetchCalls.bind(this);
        this.incrementSignalCalls = this.incrementSignalCalls.bind(this);
    }

    bindSignal(signal) {
        this.#signalRef = signal;
    }

    incrementFetchCalls() {
        this.#fetchCalls++;
        this.#signal();
    }

    incrementSignalCalls() {
        this.#signalCalls++;
        this.#signal();
    }

    #signal() {
        this.#generation++;
        if (!this.#signalRef) {
            console.log("No signal bound to OrganicStatistics.");
            return;
        }

        this.#signalRef(this.#generation);
    }

    get fetchCalls() {
        return this.#fetchCalls;
    }

    get signalCalls() {
        return this.#signalCalls;
    }

    get generation() {
        return this.#generation;
    }
}
