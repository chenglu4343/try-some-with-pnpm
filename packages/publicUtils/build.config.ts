import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    './index',

    './bin',

    // default
    // './src/index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //     builder: 'mkdist',
    //     input: './src/package/components/',
    //     outDir: './build/components'
    // },
  ],

  // Change outDir, default is 'dist'
  outDir: 'dist',

  // Generates .d.ts declaration file
  declaration: true,

  clean: true,

  rollup: {
    emitCJS: true,

    // Allows packaging of external dependencies
    inlineDependencies: true,
  },

  // as same as setting peerDependencies
  // externals: ['lodash-es'],
})
