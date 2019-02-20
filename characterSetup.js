//--Monsters--//

function newMonster(type){
	this.type = type;
}

var monsterTypes = new Array();
monsterTypes[0] = new newMonster("Troll");
monsterTypes[1] = new newMonster("Goblin");
monsterTypes[2] = new newMonster("Witch");
monsterTypes[3] = new newMonster("Snake King");
monsterTypes[4] = new newMonster("Eye Ball");
monsterTypes[5] = new newMonster("Cyclops");
monsterTypes[6] = new newMonster("Zombie");
monsterTypes[7] = new newMonster("Dragon");

var monsterID;
callWildMonster = function(){
monsterID = Math.floor(Math.random() * monsterTypes.length);
};

//--Monster's Health--//

var monsterHealth;
var monsterRating;
callMonsterHealth = function(){
	monsterHealth = Math.floor((Math.random() * 100) + 1);//1-100
	if (monsterHealth < 25){//1-24
		monsterRating = "weak";
	}
	else if (monsterHealth >= 25 && monsterHealth < 50){//25-49
		monsterRating = "regular";
	}
	else if (monsterHealth >= 50 && monsterHealth < 75){//50-74
		monsterRating = "strong";
	}
	else if (monsterHealth >= 75 && monsterHealth <= 100){//75-100
		monsterRating = "powerful";
	}
};

var damage = Math.floor((Math.random() * 10) + 1); //enemy damage random

//first monster attack - Troll

function firstAttack (firstAttack, damage){
	this.firstAttack = firstAttack;
	this.damage = damage;
}

var firstAttacks = new Array();
firstAttacks[0] = new firstAttack("Slap",damage);
firstAttacks[1] = new firstAttack("Punch",damage);
firstAttacks[2] = new firstAttack("Rock Toss",damage);
firstAttacks[3] = new firstAttack("Charge",damage);

var firstAttackID;
callFirstAttack = function(){
	firstAttackID = Math.floor(Math.random() * firstAttacks.length);
};

//second monster attack - Goblin

function secondAttack (secondAttack, damage){
	this.secondAttack = secondAttack;
	this.damage = damage;
}

var secondAttacks = new Array();
secondAttacks[0] = new secondAttack("Slash",damage);
secondAttacks[1] = new secondAttack("Bash",damage);
secondAttacks[2] = new secondAttack("Bite",damage);
secondAttacks[3] = new secondAttack("Whip",damage);

var secondAttackID;
callSecondAttack = function(){
	secondAttackID = Math.floor(Math.random() * secondAttacks.length);
};
	
//third monster attack - Witch

function thirdAttack (thirdAttack, damage){
	this.thirdAttack = thirdAttack;
	this.damage = damage;
}

var thirdAttacks = new Array();
thirdAttacks[0] = new thirdAttack("Poison",damage);
thirdAttacks[1] = new thirdAttack("Curse Spell",damage);
thirdAttacks[2] = new thirdAttack("Whirlwind",damage);
thirdAttacks[3] = new thirdAttack("Fire Stone",damage);

var thirdAttackID;
callThirdAttack = function(){
	thirdAttackID = Math.floor(Math.random() * thirdAttacks.length);
};
	
//fourth monster attack - Snake King

function fourthAttack (fourthAttack, damage){
	this.fourthAttack = fourthAttack;
	this.damage = damage;
}

var fourthAttacks = new Array();
fourthAttacks[0] = new fourthAttack("Poison Bite",damage);
fourthAttacks[1] = new fourthAttack("Poison Spit",damage);
fourthAttacks[2] = new fourthAttack("Choke of Death",damage);
fourthAttacks[3] = new fourthAttack("Paralyzing Gaze",damage);

var fourthAttackID;
callFourthAttack = function(){
	fourthAttackID = Math.floor(Math.random() * fourthAttacks.length);
};

//fifth monster attack - Eye Ball

function fifthAttack (fifthAttack, damage){
	this.fifthAttack = fifthAttack;
	this.damage = damage;
}

var fifthAttacks = new Array();
fifthAttacks[0] = new fifthAttack("Tears of Sorrow",damage);
fifthAttacks[1] = new fifthAttack("Slime Spit",damage);
fifthAttacks[2] = new fifthAttack("Ball Spin",damage);
fifthAttacks[3] = new fifthAttack("Spell of Stone",damage);

var fifthAttackID;
callFifthAttack = function(){
	fifthAttackID = Math.floor(Math.random() * fifthAttacks.length);
};

//sixth monster attack - Cyclops

function sixthAttack (sixthAttack, damage){
	this.sixthAttack = sixthAttack;
	this.damage = damage;
}

var sixthAttacks = new Array();
sixthAttacks[0] = new sixthAttack("Ground Pound",damage);
sixthAttacks[1] = new sixthAttack("Club Smash",damage);
sixthAttacks[2] = new sixthAttack("Stomp",damage);
sixthAttacks[3] = new sixthAttack("Stone Throw",damage);

var sixthAttackID;
callSixthAttack = function(){
	sixthAttackID = Math.floor(Math.random() * sixthAttacks.length);
};
	
//seventh monster attack - Zombie

function seventhAttack (seventhAttack, damage){
	this.seventhAttack = seventhAttack;
	this.damage = damage;
}

var seventhAttacks = new Array();
seventhAttacks[0] = new seventhAttack("Infected Bite",damage);
seventhAttacks[1] = new seventhAttack("Slash",damage);
seventhAttacks[2] = new seventhAttack("Charge Attack",damage);
seventhAttacks[3] = new seventhAttack("Limb Throw",damage);

var seventhAttackID;
callSeventhAttack = function(){
	seventhAttackID = Math.floor(Math.random() * seventhAttacks.length);
};

//eighth monster attack - Dragon

function eighthAttack (eighthAttack, damage){
	this.eighthAttack = eighthAttack;
	this.damage = damage;
}

var eighthAttacks = new Array();
eighthAttacks[0] = new eighthAttack("Fire Breath",damage);
eighthAttacks[1] = new eighthAttack("Earth Shake",damage);
eighthAttacks[2] = new eighthAttack("Hurricane Wind",damage);
eighthAttacks[3] = new eighthAttack("Paralyzing Roar",damage);

var eighthAttackID;
callEighthAttack = function(){
	eighthAttackID = Math.floor(Math.random() * eighthAttacks.length);
};

//--player damage random--//

var playerDamage = Math.floor((Math.random() * 10) + 1); 

//Wizard

function move1 (move1, playerDamage) {
	this.move1 = move1;
	this.playerDamage = playerDamage;
}
var player1Attacks = new Array();
player1Attacks[0] = new move1("Freeze Spell",playerDamage);
player1Attacks[1] = new move1("Fire Spell",playerDamage);
player1Attacks[2] = new move1("Wind Spell",playerDamage);
player1Attacks[3] = new move1("Rock Spell",playerDamage);

var player1ID;
callPlayer1Attack = function(){
	player1ID = Math.floor(Math.random() * player1Attacks.length);
};

//Knight

function move2 (move2, playerDamage) {
	this.move2 = move2;
	this.playerDamage = playerDamage;
}	
var player2Attacks = new Array();
player2Attacks[0] = new move2("Slash",playerDamage);
player2Attacks[1] = new move2("Stab",playerDamage);
player2Attacks[2] = new move2("Cut",playerDamage);
player2Attacks[3] = new move2("Evicerate",playerDamage);

var player2ID;
callPlayer2Attack = function(){
	player2ID = Math.floor(Math.random() * player2Attacks.length);
};

//Paladin

function move3 (move3, playerDamage) {
	this.move3 = move3;
	this.playerDamage = playerDamage;
}
var player3Attacks = new Array();
player3Attacks[0] = new move3("Spear",playerDamage);
player3Attacks[1] = new move3("Upper Cut",playerDamage);
player3Attacks[2] = new move3("Horse Charge",playerDamage);
player3Attacks[3] = new move3("Paladin Strike",playerDamage);

var player3ID;
callPlayer3Attack = function(){
	player3ID = Math.floor(Math.random() * player3Attacks.length);
};

//Rogue

function move4 (move4, playerDamage) {
	this.move4 = move4;
	this.playerDamage = playerDamage;
}
var player4Attacks = new Array();
player4Attacks[0] = new move4("Quick Stab",playerDamage);
player4Attacks[1] = new move4("Choke",playerDamage);
player4Attacks[2] = new move4("Morning Star",playerDamage);
player4Attacks[3] = new move4("Blow Dart",playerDamage);

var player4ID;
callPlayer4Attack = function(){
	player4ID = Math.floor(Math.random() * player4Attacks.length);
};

//Thief

function move5 (move5, playerDamage) {
	this.move5 = move5;
	this.playerDamage = playerDamage;
}
var player5Attacks = new Array();
player5Attacks[0] = new move5("Whip",playerDamage);
player5Attacks[1] = new move5("Short Stab",playerDamage);
player5Attacks[2] = new move5("Poison Dart",playerDamage);
player5Attacks[3] = new move5("Sling Throw",playerDamage);

var player5ID;
callPlayer5Attack = function(){
	player5ID = Math.floor(Math.random() * player5Attacks.length);
};

//Cleric

function move6 (move6, playerDamage) {
	this.move6 = move6;
	this.playerDamage = playerDamage;
}
var player6Attacks = new Array();
player6Attacks[0] = new move6("Holy Prayer",playerDamage);
player6Attacks[1] = new move6("Spell of Atonement",playerDamage);
player6Attacks[2] = new move6("Holy Fire",playerDamage);
player6Attacks[3] = new move6("Words of Peace",playerDamage);

var player6ID;
callPlayer6Attack = function(){
	player6ID = Math.floor(Math.random() * player6Attacks.length);
};	
	
function randomMonster(){ //called before match
	callWildMonster(); //call monster type
	callMonsterHealth(); //call monster health
	callFirstAttack(); //call monster attacks
	callSecondAttack();
	callThirdAttack();
	callFourthAttack();
	callFifthAttack();
	callSixthAttack();
	callSeventhAttack();
	callEighthAttack();
	
	//monster attacks
	switch (monsterTypes[monsterID].type) {
		case "Troll":
			monsterMove = firstAttacks[firstAttackID].firstAttack;
			gender = "He";
			break;
		case "Goblin":
			monsterMove = secondAttacks[secondAttackID].secondAttack;
			gender = "He";
			break;
		case "Witch":
			monsterMove = thirdAttacks[thirdAttackID].thirdAttack;
			gender = "She";
			break;
		case "Snake King":
			monsterMove = fourthAttacks[fourthAttackID].fourthAttack;
			gender = "He";
			break;
		case "Eye Ball":
			monsterMove = fifthAttacks[fifthAttackID].fifthAttack;
			gender = "It";
			break;
		case "Cyclops":
			monsterMove = sixthAttacks[sixthAttackID].sixthAttack;
			gender = "He";
			break;
		case "Zombie":
			monsterMove = seventhAttacks[seventhAttackID].seventhAttack;
			gender = "It";
			break;
		case "Dragon":
			monsterMove = eighthAttacks[eighthAttackID].eighthAttack;
			gender = "It";
			break;
		default:
			break;
	}
}