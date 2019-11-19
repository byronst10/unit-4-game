//Psuedo-code:
//This is an ongoing project for an RPG Star Wars game. Four characters are provided in the game: Obi-Wan Kenobi, Luke Skywalker, Darth Sidious, and Darth Maul
//The user can select one of the four characters to battle the other three characters, one at a time (the computer will be the opponent for the user)
//Each character in this game has an three varying levels of attack power, and healths of "100"
//The user selects their character of choice from four character thumbnails on the Home-screen of the HTML page 
//After the user clicks a character thumbnail, the other three remaining characters will appear on an "enemy menu". An "attack button" will also appear below this menu.
//The user then selects their enemy of choice by clicking on an enemy on the enemy menu. 
//The user can then attack their enemy by clicking the attack button.
//After the attack button is clicked, a function will then randomize the attack power of the user's character (from a selection of three attack levels)
//The user's character will then attack the enemy character and the enemy's health will decrease by the amount of attack power from the user.
//Likewise, the enemy character (played by the javascript code) will attack the user and decrease the health of the user's character in like manner. 
//The user can then repeat the process and perform additional attacks by clicking the attack button (which will cause in turn, the enemy character to attack the user again).
//The user continues to click the attack button until the enemy's health reaches zero. 
//The user wins a duel if the enemy's health reaches zero before the user. But, the user loses if their selected character's health drops to zero before the enemy's character.
//If the user wins a duel, they will then have the choice to battle one of the remaining two characters and repeat the process of battling that was done in the first duel.
//After a successful duel, the health of the user's character will be restored in full for the next battle.
//A "You Win" notice will appear everytime the user successfully defeats an enemy.
//If the user loses, they will have to start the game over.  


//Set global variables. (1) "User" represents the player's character, (2) "Enemy" represents the selected AI opponent, (3)characterArray holds the characters, and (4)The base attack for each character is zero. 
var user;
var enemy;
var characterArray = []; 
var baseAttack = 0;

//characters and their attack powers. The game will randomize an attack from one of three attack number options. The function also links the character to the image file from the HTML file

charStats: function(charStats){
var obi-wan = {
        name: "Obi-Wan Kenobi",
        health: 100,
        attack: 105, 25,5,
        "assets/images/obi-wan.webp",
};

var luke = {
        name: 'Luke Skywalker',
        health: 100,
        attack: 90, 35, 1,
        "assets/images/luke-skywalker.jpeg",
};

var sidious = {
        name: "Darth Sidious",
        health: 100,
        attack: 120, 10, 1,
        "assets/images/darth-sidious.jpeg",
};

var maul = {
        name: "Darth Maul",
        health: 100,
        attack: 110, 19, 10,
        "assets/images/darth-maul.jpeg",
};
characterArray.push(obi-wan, luke, sidious, maul);
}