// Dependencies: [ 'eslint', 'eslint-plugin-svelte', 'svelte' ] optionally [ '@typescript-eslint/parser', '@typescript-eslint/eslint-plugin', 'typescript' ]
// In VSCode, for ESLint to work properly, the 'svelte' extension must be added to 'eslint.validate' in the settings.json file.

/** @brief ESLint override for the Svelte files. */
const svelteOverride = {

  extends: 'plugin:svelte/recommended',
  files: '*.svelte',

  // This is my preferred set of rules. See: https://sveltejs.github.io/eslint-plugin-svelte/rules/
  parser: 'svelte-eslint-parser',
  rules: {

    // All the other rules are enabled by the default in the 'recommended' preset in the Svelte Plugin.
    'svelte/infinite-reactive-loop': 'error',
    'svelte/no-dom-manipulating': 'error',
    'svelte/no-dupe-on-directives': 'error',
    'svelte/no-dupe-use-directives': 'error',

    'svelte/require-store-callbacks-use-set-param': 'error',
    'svelte/no-target-blank': 'error',
    'svelte/button-has-type': 'error',
    'svelte/no-useless-mustaches': 'error',

    'svelte/no-reactive-literals': 'error',
    'svelte/require-event-dispatcher-types': 'error',
    'svelte/require-optimized-style-attribute': 'error',
    'svelte/require-stores-init': 'error',

    'svelte/first-attribute-linebreak': 'error',
    'svelte/prefer-style-directive': 'error',
    'svelte/no-extra-reactive-curlies': 'error',

    'svelte/html-quotes': ['error', {

      prefer: 'single',
      dynamic: {

        quoted: false,
        avoidInvalidUnquotedInHTML: true
      }
    }],

    'svelte/indent': 'error',
    'svelte/html-closing-bracket-spacing': 'error',
    'svelte/mustache-spacing': ['error', {

      textExpressions: 'always',
      attributesAndProps: 'always',
      directiveExpressions: 'always'
    }],

    'svelte/shorthand-attribute': 'error',
    'svelte/shorthand-directive': 'error',
    'svelte/spaced-html-comment': 'error',
    'svelte/no-trailing-spaces': 'error'
  },

  parserOptions: {

    // Comment this out if TypeScript is not used.
    parser: '@typescript-eslint/parser',
  }
}

/** @brief Basic ESLint configuration which uses the Svelte rules. */
const config = {

  env: {

    browser: true,
    node: true,
  },

  extends: [ 'eslint:recommended' ],
  overrides: [ svelteOverride ],

  root: true,
}


module.exports = config;