"use strict";
// FEATURES: ADD PLAYER WON MODAL WINDOW
// ADD PRE GAME SETTINGS MODAL WINDOW
// randomized number tied to a dice

//Restart
const newGame = document.querySelector('.new-game');
//roll btn
const roll = document.querySelector('.image')
//hold btn
const hold = document.querySelector('.hold');
//
const diceImg = document.querySelector('img')





let gameplaying = 0;

let score, dice, player, current;


// starting condition function
const start = function () {
    score = [0, 0];
    current = 0;
    player = 0;

    for (let i = 0; i < 2; i++) {
        document.querySelector(`.global-value-${i}`).textContent = 0;
        document.querySelector(`.current-value-${i}`).textContent = 0;
        document.querySelector(`.player-${i}`).classList.remove('m');
        document.querySelector(`.player-${i}-name`).style.color = 'rgba(0, 0, 0, 0.678)';
    }
    diceImg.style.opacity = '0';
}
start();

//Switch player funtion
const playerSwitch = function () {
    current = 0;
    diceImg.style.opacity = '0';
    document.querySelector(`.player-${player}`).classList.remove('m');
    document.querySelector(`.current-value-${player}`).textContent = 0;
    document.querySelector(`.player-${player}-name`).style.color = 'rgba(0, 0, 0, 0.678)';
    player = player === 0 ? 1 : 0;
    document.querySelector(`.player-${player}`).classList.add('m');
    document.querySelector(`.player-${player}-name`).style.color = 'red';
}





//New Game Event
newGame.addEventListener('click', start)


// roll event handler
roll.addEventListener('click', function () {
    //randomizer
    dice = Math.trunc((Math.random() * 6) + 1);
    //bringing back opacity
    diceImg.style.opacity = '1';
    //adding style class width
    document.querySelector(`.player-${player}`).classList.add('m');
    //adding style class for text color
    document.querySelector(`.player-${player}-name`).style.color = 'red';
    //changing image dependoing on DICE value
    diceImg.src = `dice-${dice}.png`;
    //changing content of current value depending if it's a 1
    if (dice !== 1) {
        current += dice;
        document.querySelector(`.current-value-${player}`).textContent = current;
    } else {
        //switch player
        playerSwitch()
    }
})

hold.addEventListener('click', function () {
    //Storing current value to the globalScore value
    score[player] += Number(document.querySelector(`.current-value-${player}`).textContent)
    document.querySelector(`.global-value-${player}`).textContent = score[player];
    //player switch
    playerSwitch();

    if (score[player] >= 100) {
        console.log('dsda')
        start()
    }
})



