// TODO write an exported function that passes the tests in .spec.js
// TODO write jsdoc comments for the function

// ? follow this template for jsdoc comments
/**
 * what does the function do?
 *
 * @param {paramType} nameInput - the name that will be used for the string output
 * @returns {returnType} description
 */

export function twoFer(nameInput = "you") {
    return `One for ${nameInput}, one for me.`
}

console.log(twoFer());