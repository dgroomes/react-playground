/*
Serve and bundle the source code using esbuild.

Refer to the API docs https://esbuild.github.io/api/
*/

import * as esbuild from 'esbuild'

const ctx = await esbuild.context({
    entryPoints: [
        {"in": 'src/root/app.tsx', "out": 'root-bundle'},
        {"in": 'src/root/style.css', "out": 'root-bundle'},
        {"in": 'src/inefficient-use-effect/app.tsx', "out": 'inefficient-use-effect-bundle'},
        {"in": 'src/efficient-use-effect/app.tsx', "out": 'efficient-use-effect-bundle'}
    ],
    platform: 'browser',
    outdir: 'www',
    bundle: true,
    sourcemap: "linked"
});

const {host, port} = await ctx.serve({
    servedir: 'www',
    host: '::1',
    port: 8080
});

console.log("Serving on http://[%s]:%d", host, port)
