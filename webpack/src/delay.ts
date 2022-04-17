/**
 * 'delay' is an 'async/await' wrapper over the callback-based 'setTimeout' function we all know and love.
 */
export default async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms))
}
