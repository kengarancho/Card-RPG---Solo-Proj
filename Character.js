import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"



function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore =  attackScoreArray.reduce((total, current) => total + current)
         this.health -= totalAttackScore
         if (this.health <= 0) {
            this.health = 0
            this.dead = true
        }
    }

    this.getHealthBarHtml = function(){
        const percent = getPercentage(this.health, this.maxHealth)
        
            return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                    style="width: ${percent} %;">
                </div>
            </div>`
    }

    this.getCharacterHtml = function() {
        const {name, avatar, health, diceCount} = this;
        const healthBar = this.getHealthBarHtml()

        return  `<div class="character-card">
                        <h4>${name}</h4>
                        <img class="avatar" src="${avatar}"/>
                        <p class="health">Health: <b>${health}</b></p>
                        ${healthBar}
                        <div class="dice-container">
                            ${this.diceArray}
                        </div>
                </div`
    }
}

export default Character