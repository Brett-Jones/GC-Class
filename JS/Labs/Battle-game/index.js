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
    let dead = health <= 0 ? true : false;
    return dead;
}

const fight = (player1, player2, player1Health, player2Health) => {
    while(player1Health > 0 || player2Health > 0){
        const attacker = chooseOption(player1, player2);
        if(attacker === player1){
            let player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        }else {
            player1 === attackPlayer(player1Health);
            logHealth(player1, player1Health);
        }
            if(isDead(player1Health)){
                logDeath(player2, player1)
                break;
            }
    }
}

const player1 = prompt("Enter Name of Player 1");
const player2 = prompt("Enter Name of Player 2");

fight(player1, player2);