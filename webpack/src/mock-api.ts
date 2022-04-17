/**
 * Make a fake HTTP request to some API.
 *
 * Pretend that this function makes a GET HTTP request to an API using the URL path "/message". The API responds with a
 * simple message and it takes about a second for the request to complete.
 *
 * The requirement to integrate to an API from a React codebase is universal, so using this integration as a way to
 * illustrate code concepts in a "playground" repo should be relatable for most readers.
 */
export default function httpGetMessage(): Promise<string> {
    return new Promise<string>((resolve, _rejected) => {
        setTimeout(() => resolve('Hello from a Mock HTTP API in "react-playground/webpack"!'), 1_000);
    });
}
