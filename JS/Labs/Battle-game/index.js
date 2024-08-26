
const randomDamage = () => {
    Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    const randNum = Math.random() * 2 ? opt1 : opt2;
    return randNum
}

const attackPlayer = (health) => {
    return health - randomDamage;
}

const logHeath = (player, health) => {
    console.log(player + " health: " + health);
}

const logDeath = (winner, loser) => {
    console.log(winner + " defeated " + loser);
}

const isDead = (health) => {
    
}























