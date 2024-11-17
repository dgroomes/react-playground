/**
 * A client class for making simulated API calls to an imaginary server that serves
 * random dice rolls.
 */
export class GameDieApiClient {

    #delay;
    #organicStatistics;

    constructor(delay, organicStatistics) {
        this.#delay = delay;
        this.#organicStatistics = organicStatistics;
        this.fetchGameDieRoll = this.fetchGameDieRoll.bind(this);
    }

    /**
     * Simulates an HTTP request to some API that returns a game die roll.
     * It also simulates a delay in the response.
     *
     * @return {Promise<number>} A promise that resolves to a random number from 1 to 6.
     */
    fetchGameDieRoll() {
        console.log('[GameDieApiClient] Simulating an HTTP request...');
        this.#organicStatistics.incrementFetchCalls();

        const dieRoll = Math.floor(Math.random() * 6) + 1;
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('[GameDieApiClient] Simulated HTTP request complete.');
                resolve(Promise.resolve(dieRoll));
            }, this.#delay);
        });
    }
}
