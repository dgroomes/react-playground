/**
 * Make a fake HTTP request to some API.
 *
 * Pretend that this function makes a GET HTTP request to an API using the URL path "/message". The API responds with a
 * simple message and it takes a second or two for the request to complete.
 *
 * The requirement to integrate to an API from a React codebase is universal, so using this integration as a way to
 * illustrate code concepts in a "playground" repo should be relatable for most readers.
 */
import delay from "./delay";

export default async function httpGetMessage(): Promise<string> {
    console.debug("Making (but it's pretend) an HTTP request to the API...");
    await delay(1_500);
    console.debug("Request completed.");
    return 'Hello from a Mock HTTP API in "react-playground/webpack"!';
}
