import { build } from '../node_modules/esbuild/lib/main.js'

build({
    //watch: false,
    bundle: true,
    minify: true,
    target: 'esnext',
    logLevel: 'info',
    format: 'esm',
    entryPoints: ['./src/client/client.ts'],
    outfile: './dist/client/client.js',
    /*external: [
        'alt-*',
        'natives',
    ]*/
})

