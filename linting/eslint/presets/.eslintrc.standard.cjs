// Dependencies: [ 'standard' ]

/** @brief ESLint configuration which uses the StandardJS linting rules. */
const config = {

  extends: [

    // Use the StandardJS rules.
    './node_modules/standard/eslintrc.json'
  ]
}


module.exports = config