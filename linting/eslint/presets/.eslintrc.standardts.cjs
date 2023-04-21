// Dependencies: [ 'eslint', 'typescript', 'eslint-config-standard-with-typescript' ]
// Install peer dependencies if not working. See: https://github.com/standard/eslint-config-standard-with-typescript

/** @brief A couple of opinionated adjustments to the StandardTS rules. */
const preferredRules = {

  'padded-blocks': 'off',
  'padding-line-between-statements': [

    'error',

    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' },

    { blankLine: 'always', prev: 'import', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
    { blankLine: 'always', prev: 'export', next: '*' },
    { blankLine: 'any', prev: 'export', next: 'export' },

    { blankLine: 'any', prev: '*', next: 'return' },
    { blankLine: 'always', prev: ['case', 'default'], next: '*' },

    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'always', prev: '*', next: 'block' }
  ]
}

/** @brief ESLint configuration which uses the StandardJS linting rules. */
const config = {

  env: {

    browser: true,
    node: true
  },

  extends: [

    // Use the StandardTS rules.
    'standard-with-typescript',
  ],

  parserOptions: {

    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  root: true,
  rules: preferredRules
}


module.exports = config