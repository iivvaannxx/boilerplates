// Dependencies: [ 'eslint' ]

/** @brief This is just a base configuration. Copy and change accordingly depending on the needs. */
const config = { 

  env: {

    /** @brief Whether the app will run in a browser or not. */
    browser: true,
    
    /** @brief Whether the app will run in a node environment or not. */
    node: true,
  },

  extends: [
    
    /** @brief Use the recommended ESLint rules by default. */
    'eslint:recommended',
  ],
  
  parserOptions: {
    
    /** @brief Use the latest supported ECMAScript standard. */
    ecmaVersion: 'latest',

    /** @brief Use ECMAScript modules. */
    sourceType: 'module',
  } 
}


module.exports = config