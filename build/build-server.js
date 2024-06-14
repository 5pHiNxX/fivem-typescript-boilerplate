import { build } from '../node_modules/esbuild/lib/main.js'

build({
    //watch: false,
    bundle: true,
    minify: true,
    target: 'esnext',
    logLevel: 'info',
    format: 'esm',
    entryPoints: ['./src/server/server.ts'],
    outfile: './dist/server/server.js',
    /*external: [
        'alt-*',
        'natives',
    ]*/
})

