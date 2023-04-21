// Dependencies: [ '@typescript-eslint/parser', '@typescript-eslint/eslint-plugin', 'eslint', 'typescript' ]

/** @brief This is just a base configuration. Copy and change accordingly depending on the needs. */
const config = {

  extends: [

    // Extend the base configuration.
    'eslint:recommended',

    // Use the recommended TypeScript rules.
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parser: '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint' ],

  parserOptions: {

    // Set the path to the TSConfig and to the root dir.
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  root: true,
}


module.exports = config