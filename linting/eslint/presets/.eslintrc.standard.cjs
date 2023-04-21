// Dependencies: [ 'eslint', 'eslint-config-standard' ]

/** @brief A couple of opinionated adjustments to the StandardJS rules. */
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

    // Use the StandardJS rules.
    'eslint-config-standard'
  ],

  root: true,
  rules: preferredRules
}


module.exports = config