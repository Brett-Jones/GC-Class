"use strict";

const randomDamage = () => {
    let damage = Math.floor(Math.random() * 10) + 1;
    return damage;
}
//Using the .5 ensures 50% chance to be 0 or 1
const chooseOption = (opt1, opt2) => {
    const randNum = Math.random() < .5 ? opt1 : opt2;
    return randNum
}

const attackPlayer = (health) => {
    return health - randomDamage();
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
  };

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    let alive = health <= 0 ? true : false;
    return alive;
}

const fight = (player1, player2, player1Health, player2Health) => {
    while(true){
        attacker === chooseOption(player1, player2)
        if(attacker === player1){
            let player2Health = attackPlayer(player2Health);
        } else if(logHealth(player2, player2Health)){
            
        }
    }
    
    for(let i = 0; i < 10; i++) {

    }
}













