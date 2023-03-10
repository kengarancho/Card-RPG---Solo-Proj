/* This function generates random numbers based on dice count of the character */
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(num) {
        return Math.floor(Math.random() * 6) + 1
    })   
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function(num) {
        return `<div class="placeholder-dice"></div>`
    }).join('')   
}

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}