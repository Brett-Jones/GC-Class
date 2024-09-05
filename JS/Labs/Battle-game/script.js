"use strict";

const randomDamage = () => Math.floor(Math.random() * 10) + 1; 

/*Using the .5 ensures 50% chance to be 0 or 1*/
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() >= .5) ?  1 : 0;
    return randNum === 0 ? opt1 : opt2;
}

const attackPlayer = (health) => {
    return (health - randomDamage());
}

const logHealth = (player, health) => 
    console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => 
    console.log(`${winner} defeated ${loser}`);

const isDead = health => {
    return health <= 0;
  };

const fight = (player1, player2, player1Health, player2Health) => {
    while(player1Health > 0 || player2Health > 0){
        const attacker = chooseOption(player1, player2);
        if(attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        }else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
        }
            if(isDead(player1Health)){
                logDeath(player2, player1)
                break;
            }
    }
}
fight("Dwight", "Michael", 100, 100);












