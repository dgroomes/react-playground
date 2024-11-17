export class GameDieRoll {

    #gameDieApiClient;
    #id;
    #organicStatistics;
    #lifecyclePhase = "init";
    #faceValue = null;
    #signalRef = null;
    #generation = 0;

    constructor(gameDieApiClient, id, organicStatistics) {
        this.#gameDieApiClient = gameDieApiClient;
        this.#id = id;
        this.#organicStatistics = organicStatistics;
        this.roll = this.roll.bind(this);
        this.bindSignal = this.bindSignal.bind(this);
    }

    roll() {
        this.#lifecyclePhase = "fetching";
        this.#signal();
        console.log("[roll] Making a 'fetch' request.");
        this.#gameDieApiClient.fetchGameDieRoll()
            .then(data => {
                this.#lifecyclePhase = "fetched";
                this.#faceValue = data;
                this.#signal();
            });
    };

    bindSignal(signal) {
        this.#signalRef = signal;
    }

    #signal() {
        this.#generation++;
        if (this.#signalRef) {
            console.log(`[GameDieRoll#${this.#id}] - Signal invoked.`);
            this.#organicStatistics.incrementSignalCalls();
            this.#signalRef(this.#generation);
        }
    }

    get id() {
        return this.#id;
    }

    get lifecyclePhase() {
        return this.#lifecyclePhase;
    }

    get faceValue() {
        return this.#faceValue;
    }
}
