import {GameDieRoll} from "./GameDieRoll";

/**
 * The "application container" is the object graph that makes up the program's objects. This is something that is
 * designed organically to match the needs of the program/domain. The objects in this graph will often be complements
 * to same-named function components in React, but this isn't a requirement.
 *
 * The application container allows non-serializable objects. This means you can have references to Promises, DOM elements,
 * React objects, browser APIs, or whatever you'd like. You can also have circular references. The idea is that you can
 * program how you like, and you don't have to serialize your objects into a React state tree. This means we are using
 * React in a mutable way. That's a trade-off. It's a trade-off I'd like to explore.
 */
export class AppContainer {

    #gameDieRolls = [];
    #gameDieApiClient;
    #organicStatistics;
    #signalRef = null;
    #generation = 0;

    constructor(gameDieApiClient, organicStatistics) {
        this.#gameDieApiClient = gameDieApiClient;
        this.#organicStatistics = organicStatistics;
        this.addGameDieRoll = this.addGameDieRoll.bind(this);
        this.bindSignal = this.bindSignal.bind(this);
    }

    addGameDieRoll() {
        const id = this.gameDieRolls.length + 1;
        const gameDieRoll = new GameDieRoll(this.#gameDieApiClient, id, this.#organicStatistics);
        this.gameDieRolls.push(gameDieRoll);
        gameDieRoll.roll();
        this.#signal();
    }

    bindSignal(signal) {
        this.#signalRef = signal;
    }

    #signal() {
        this.#generation++;
        if (this.#signalRef) {
            console.log("[AppContainer] - Signal invoked.");
            this.#organicStatistics.incrementSignalCalls();
            this.#signalRef(this.#generation);
        }
    }

    get generation() {
        return this.#generation;
    }

    get gameDieRolls() {
        return this.#gameDieRolls;
    }
}
