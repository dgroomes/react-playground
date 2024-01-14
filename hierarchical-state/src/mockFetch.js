const delay = 1500;

/**
 * This mocks the 'fetch' API and simulates an HTTP request to some API that returns a dice roll (just one die) roll.
 * It also simulates a delay in the response.
 */
export function mockFetch(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve(Math.floor(Math.random() * 6) + 1)
            });
        }, delay);
    });
}
