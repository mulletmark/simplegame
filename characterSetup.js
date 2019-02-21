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
	number = monsterID + 1;
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

function monsterAttack (monsterAttack, damage){
	this.monsterAttack = monsterAttack;
	this.damage = damage;
}

var monsterAttacks = new Array();
monsterAttacks[0] = new monsterAttack("Slap",damage); //Troll
monsterAttacks[1] = new monsterAttack("Punch",damage);
monsterAttacks[2] = new monsterAttack("Rock Toss",damage);
monsterAttacks[3] = new monsterAttack("Charge",damage);
monsterAttacks[4] = new monsterAttack("Slash",damage); //Goblin
monsterAttacks[5] = new monsterAttack("Bash",damage);
monsterAttacks[6] = new monsterAttack("Bite",damage);
monsterAttacks[7] = new monsterAttack("Whip",damage);
monsterAttacks[8] = new monsterAttack("Poison",damage); //Witch
monsterAttacks[9] = new monsterAttack("Curse Spell",damage);
monsterAttacks[10] = new monsterAttack("Whirlwind",damage);
monsterAttacks[11] = new monsterAttack("Fire Stone",damage);
monsterAttacks[12] = new monsterAttack("Poison Bite",damage); //Snake King
monsterAttacks[13] = new monsterAttack("Poison Spit",damage);
monsterAttacks[14] = new monsterAttack("Choke of Death",damage);
monsterAttacks[15] = new monsterAttack("Paralyzing Gaze",damage);
monsterAttacks[16] = new monsterAttack("Tears of Sorrow",damage); //Eye Ball
monsterAttacks[17] = new monsterAttack("Slime Spit",damage);
monsterAttacks[18] = new monsterAttack("Ball Spin",damage);
monsterAttacks[19] = new monsterAttack("Spell of Stone",damage);
monsterAttacks[20] = new monsterAttack("Ground Pound",damage); //Cyclops
monsterAttacks[21] = new monsterAttack("Club Smash",damage);
monsterAttacks[22] = new monsterAttack("Stomp",damage);
monsterAttacks[23] = new monsterAttack("Stone Throw",damage);
monsterAttacks[24] = new monsterAttack("Infected Bite",damage); //Zombie
monsterAttacks[25] = new monsterAttack("Slash",damage);
monsterAttacks[26] = new monsterAttack("Charge Attack",damage);
monsterAttacks[27] = new monsterAttack("Limb Throw",damage);
monsterAttacks[28] = new monsterAttack("Fire Breath",damage); //Dragon
monsterAttacks[29] = new monsterAttack("Earth Shake",damage);
monsterAttacks[30] = new monsterAttack("Hurricane Wind",damage);
monsterAttacks[31] = new monsterAttack("Paralyzing Roar",damage);

var attackID;
var attackArray;
callAttack = function(number){
	switch (number) {
		case 1:
			attackArray = monsterAttacks.slice(0,4);
			break;
		case 2:
			attackArray = monsterAttacks.slice(4,8);
			break;
		case 3:
			attackArray = monsterAttacks.slice(8,12);
			break;
		case 4:
			attackArray = monsterAttacks.slice(12,16);
			break;
		case 5:
			attackArray = monsterAttacks.slice(16,20);
			break;
		case 6:
			attackArray = monsterAttacks.slice(20,24);
			break;
		case 7:
			attackArray = monsterAttacks.slice(24,28);
			break;
		case 8:
			attackArray = monsterAttacks.slice(28,32);
			break;
	}
	attackID = Math.floor(Math.random() * attackArray.length);
};

//--player damage random--//

var playerDamage = Math.floor((Math.random() * 10) + 1);

function move (move, playerDamage) {
	this.move = move;
	this.playerDamage = playerDamage;
}
var playerAttacks = new Array();
playerAttacks[0] = new move("Freeze Spell",playerDamage); //Wizard
playerAttacks[1] = new move("Fire Spell",playerDamage);
playerAttacks[2] = new move("Wind Spell",playerDamage);
playerAttacks[3] = new move("Rock Spell",playerDamage);
playerAttacks[4] = new move("Slash",playerDamage); //Knight
playerAttacks[5] = new move("Stab",playerDamage);
playerAttacks[6] = new move("Cut",playerDamage);
playerAttacks[7] = new move("Evicerate",playerDamage);
playerAttacks[8] = new move("Spear",playerDamage); //Paladin
playerAttacks[9] = new move("Upper Cut",playerDamage);
playerAttacks[10] = new move("Horse Charge",playerDamage);
playerAttacks[11] = new move("Paladin Strike",playerDamage);
playerAttacks[12] = new move("Quick Stab",playerDamage); //Rogue
playerAttacks[13] = new move("Choke",playerDamage);
playerAttacks[14] = new move("Morning Star",playerDamage);
playerAttacks[15] = new move("Blow Dart",playerDamage);
playerAttacks[16] = new move("Whip",playerDamage); //Thief
playerAttacks[17] = new move("Short Stab",playerDamage);
playerAttacks[18] = new move("Poison Dart",playerDamage);
playerAttacks[19] = new move("Sling Throw",playerDamage);
playerAttacks[20] = new move("Holy Prayer",playerDamage); //Cleric
playerAttacks[21] = new move("Spell of Atonement",playerDamage);
playerAttacks[22] = new move("Holy Fire",playerDamage);
playerAttacks[23] = new move("Words of Peace",playerDamage);

var playerAttackID;
var playerAttackArray;
callPlayerAttack = function(playerNumber){
	switch (playerNumber) {
		case 1:
			playerAttackArray = playerAttacks.slice(0,4);
			break;
		case 2:
			playerAttackArray = playerAttacks.slice(4,8);
			break;
		case 3:
			playerAttackArray = playerAttacks.slice(8,12);
			break;
		case 4:
			playerAttackArray = playerAttacks.slice(12,16);
			break;
		case 5:
			playerAttackArray = playerAttacks.slice(16,20);
			break;
		case 6:
			playerAttackArray = playerAttacks.slice(20,24);
			break;
	}
	playerAttackID = Math.floor(Math.random() * playerAttackArray.length);
};
	
function randomMonster(){ //called before match
	callWildMonster(); //call monster type
	callMonsterHealth(); //call monster health
	callAttack(number); //call monster attacks
	
	//monster attacks
	switch (monsterTypes[monsterID].type) {
		case "Troll":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "He";
			break;
		case "Goblin":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "He";
			break;
		case "Witch":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "She";
			break;
		case "Snake King":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "He";
			break;
		case "Eye Ball":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "It";
			break;
		case "Cyclops":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "He";
			break;
		case "Zombie":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "It";
			break;
		case "Dragon":
			monsterMove = attackArray[attackID].monsterAttack;
			gender = "It";
			break;
		default:
			break;
	}
}