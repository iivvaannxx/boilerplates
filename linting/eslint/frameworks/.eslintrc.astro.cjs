// Dependencies: [ 'eslint', 'eslint-plugin-astro', 'astro' ] + optionally [ 'eslint-plugin-jsx-a11y', '@typescript-eslint/parser', '@typescript-eslint/eslint-plugin', 'typescript' ]
// In VSCode, for ESLint to work properly, the 'astro' extension must be added to 'eslint.validate' in the settings.json file.

/** @brief Whether to lint the optional A11Y rules for Astro files. */
const lintAccessibility = true

/** @brief ESLint override for the Astro files. */
const astroOverride = {

  files: '*.astro',
  parser: 'astro-eslint-parser',

  parserOptions: {

    // Comment this out if TypeScript is not used.
    parser: '@typescript-eslint/parser',
    extraFileExtensions: [ '.astro' ],
  },

  // This is my preferred set of rules. See: https://ota-meshi.github.io/eslint-plugin-astro/rules/
  rules: {

    // All the other rules are enabled by the default in the 'recommended' preset in the Astro Plugin.
    'astro/no-set-html-directive': 'error',
    'astro/no-set-text-directive': 'warn',
    'astro/no-unused-css-selector': 'error',
    'astro/semi': [ 'error', 'never' ],

    ...(lintAccessibility ? {
      
      // All the other rules are enabled by the default in the 'recommended' preset in the A11Y Plugin.
      'astro/jsx-a11y/anchor-ambiguous-text': 'error',
      'astro/jsx-a11y/control-has-associated-label': 'error',

      'astro/jsx-a11y/lang': 'error',
      'astro/jsx-a11y/prefer-tag-over-role': 'error',

    } : { })
  }
}

/** @brief Basic ESLint configuration which uses the Astro rules. */
const config = {

  env: {

    browser: true,
    node: true,
  },

  extends: [
    
    'eslint:recommended',
    'plugin:astro/recommended',

    // Optionally, add the A11Y rules.
    ...(lintAccessibility ? [ 'plugin:astro/jsx-a11y-recommended' ] : []),
  ],
  
  overrides: [ astroOverride ],
  root: true,
}


module.exports = config