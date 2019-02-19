//--Global variables--//

var playerClass;
var className;
var abilityName;
var abilityResult;
var gender;
var player;
var damage;
var playerHealth;
var playerArmorStrength;
var monsterMove;
var yourMove;
var newMatch = true;
var playerChoice;
var playerChoiceFlag;
var playerMove;
var err = "";
var whoAttacks = Math.floor(Math.random() * 2);

function start() {
	beginFight();
}
function playerName(){
	player = prompt("Please type the name of your player.","Your Name");
	var someErr = 0;
	while (true) {
		if (player == "Your Name" || player == ""){
			err += "Please enter a name.\n";
			someErr = 1;
		}
		if (player.length > 12 || player.length < 2){
			err += "Name must be between 2-12 characters long.\n";
			someErr = 1;
		}
		if (/[^a-zA-Z\-]/.test(player)){
			err += "Name must only contain letter characters and hyphens(-).\n";
			someErr = 1;
		}
		if (someErr == 1){//Error string will be displayed
			alert(err);
			err = "";//reset string to be empty
			someErr = 0;//reset variable to 0
			playerName();
		}
		else {
			return true;
		}
	}
}
function startGame(){
	playerName();
	var classFlag = 0;
	playerHealth = Math.floor((Math.random() * 100) + 1); //1-100
	playerArmorStrength = Math.floor((Math.random() * 50) + 1);//1-50
	//$("#GameText").html("Your name is "+player+" and your starting health is: "+playerHealth+" \nand your armor strength is: "+playerArmorStrength);
	alert("Your name is "+player+" and your starting health is: "+playerHealth+" \nand your armor strength is: "+playerArmorStrength);
	while (classFlag == 0){
		playerClass = prompt("Please choose your character class:","Wizard = 1, Knight = 2, Paladin = 3, Rogue = 4, Thief = 5, Cleric = 6");
		switch (playerClass) {
			case "1":
				className = "Wizard"; 
				abilityName = "Spellcasting";
				abilityResult = "adds 2 hit points to your armor!";
				playerHealth += 10;//health goes up 10 points
				classFlag = 1;
				break;		
			case "2":
				className = "Knight"; 
				abilityName = "Strong Swing";
				abilityResult = "adds 5 hit points to your attack!";
				playerArmorStrength += 10;//armor goes up 10 points
				classFlag = 1;
				break;
			case "3":
				className = "Paladin"; 
				abilityName = "Swift Stab";
				abilityResult = "adds 3 hit points to your attack!";
				playerArmorStrength += 5;//armor goes up 5 points
				classFlag = 1;
				break;
			case "4":
				className = "Rogue"; 
				abilityName = "Health Steal";
				abilityResult = "steals 5 health points from monster!";
				classFlag = 1;
				break;
			case "5":
				className = "Thief"; 
				abilityName = "Stealth Attack";
				abilityResult = "reduced monster health by 2 health points!";
				playerHealth += 5;//health goes up 5 points
				classFlag = 1;
				break;
			case "6":
				className = "Cleric"; 
				abilityName = "Quick Heal";
				abilityResult = "adds 5 health points to your overall health!";
				classFlag = 1;
				break;
			default:
				alert("Please pick one of the options listed");
				classFlag = 0;
				break;
		}
	}
	//$("#GameText").html("You have chosen the class: "+className+" \nwith the ability of: "+abilityName);
	alert("You have chosen the class: "+className+" \nwith the ability of: "+abilityName);
}
function Choices(){ //choose your moves or let the computer randomize them
	if (playerChoice != "1" || playerChoice != "2"){
		playerChoice = prompt("Do you want to choose your moves or let the computer do it for you?","Choose = 1, Computer = 2");
		if (playerChoice == "1"){
			playerChoiceFlag = 1;
		}
		else if (playerChoice == "2"){
			playerChoiceFlag = 0;
		}
		else {
			alert("Please pick one of the options listed");
			Choices();
		}
	}
}
//function beginAdventure(){
	//this begins the quest. Choose between several different environments and scenarios in each. At random points enemies will be encountered. If they are defeated,
	//the player continues to another scenario. The enemy encounters are random and sometimes you can travel far without meeting one. The number of scenarios you have 
	//pass through should be random as well. Possibly have a final boss? Player health should be high so you can survive multiple encounters or you should have a health
	//restore system. maybe after encounters you can gain new abilities or new armor.
//}
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
function battleProgress(){ //called after match begins
	callFirstAttack();//randomize monster moves and damage 
	callSecondAttack();
	callThirdAttack();
	callFourthAttack();
	callFifthAttack();
	callSixthAttack();
	callSeventhAttack();
	callEighthAttack();
	callPlayer1Attack();//randomize player moves
	callPlayer2Attack();
	callPlayer3Attack();
	callPlayer4Attack();
	callPlayer5Attack();
	callPlayer6Attack();
	
	//randomize damage 
	damage = Math.floor((Math.random() * 10) + 1);
	playerDamage = Math.floor((Math.random() * 10) + 1);
	
	//determine who attacks next move
	switch (whoAttacks) {
		case 0:
			whoAttacks = Math.floor(Math.random() * 2);
			switch (monsterTypes[monsterID].type) {
				case "Troll":
					monsterMove = firstAttacks[firstAttackID].firstAttack;
					monsterAttackMove();
					break;
				case "Goblin":
					monsterMove = secondAttacks[secondAttackID].secondAttack;
					monsterAttackMove();
					break;
				case "Witch":
					monsterMove = thirdAttacks[thirdAttackID].thirdAttack;
					monsterAttackMove();
					break;
				case "Snake King":
					monsterMove = fourthAttacks[fourthAttackID].fourthAttack;
					monsterAttackMove();
					break;
				case "Eye Ball":
					monsterMove = fifthAttacks[fifthAttackID].fifthAttack;
					monsterAttackMove();
					break;
				case "Cyclops":
					monsterMove = sixthAttacks[sixthAttackID].sixthAttack;
					monsterAttackMove();
					break;
				case "Zombie":
					monsterMove = seventhAttacks[seventhAttackID].seventhAttack;
					monsterAttackMove();
					break;
				case "Dragon":
					monsterMove = eighthAttacks[eighthAttackID].eighthAttack;
					monsterAttackMove();
					break;
				default:
					break;
			}
			break;
		
		case 1:
			whoAttacks = Math.floor(Math.random() * 2);
			switch (playerClass){
				case "1": //Wizard
					if (playerChoiceFlag == 0){
						yourMove = player1Attacks[player1ID].move1;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nFreeze Spell = 1, Fire Spell = 2, Wind Spell = 3, Rock Spell = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player1Attacks[0].move1;
								break;
							case "2":
								yourMove = player1Attacks[1].move1;
								break;
							case "3":
								yourMove = player1Attacks[2].move1;
								break;
							case "4":
								yourMove = player1Attacks[3].move1;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}
					}
					playerAttackMove();
					break;
				case "2": //Knight
					if (playerChoiceFlag == 0){
						yourMove = player2Attacks[player2ID].move2;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nSlash = 1, Stab = 2, Cut = 3, Evicerate = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player2Attacks[0].move2;
								break;
							case "2":
								yourMove = player2Attacks[1].move2;
								break;
							case "3":
								yourMove = player2Attacks[2].move2;
								break;
							case "4":
								yourMove = player2Attacks[3].move2;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}		
					}
					playerAttackMove();
					break;
				case "3": //Paladin
					if (playerChoiceFlag == 0){
						yourMove = player3Attacks[player3ID].move3;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nSpear = 1, Upper Cut = 2, Horse Charge = 3, Paladin Strike = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player3Attacks[0].move3;
								break;
							case "2":
								yourMove = player3Attacks[1].move3;
								break;
							case "3":
								yourMove = player3Attacks[2].move3;
								break;
							case "4":
								yourMove = player3Attacks[3].move3;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}	
					}
					playerAttackMove();
					break;
				case "4": //Rogue
					if (playerChoiceFlag == 0){
						yourMove = player4Attacks[player4ID].move4;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nQuick Stab = 1, Choke = 2, Morning Star = 3, Blow Dart = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player4Attacks[0].move4;
								break;
							case "2":
								yourMove = player4Attacks[1].move4;
								break;
							case "3":
								yourMove = player4Attacks[2].move4;
								break;
							case "4":
								yourMove = player4Attacks[3].move4;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}	
					}
					playerAttackMove();
					break;
				case "5": //Thief
					if (playerChoiceFlag == 0){
						yourMove = player5Attacks[player5ID].move5;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nWhip = 1, Short Stab = 2, Poison Dart = 3, Sling Throw = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player5Attacks[0].move5;
								break;
							case "2":
								yourMove = player5Attacks[1].move5;
								break;
							case "3":
								yourMove = player5Attacks[2].move5;
								break;
							case "4":
								yourMove = player5Attacks[3].move5;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}	
					}
					playerAttackMove();
					break;
				case "6": //Cleric
					if (playerChoiceFlag == 0){
						yourMove = player6Attacks[player6ID].move6;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nHoly Prayer = 1, Spell of Atonement = 2, Holy Fire = 3, Words of Peace = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = player6Attacks[0].move6;
								break;
							case "2":
								yourMove = player6Attacks[1].move6;
								break;
							case "3":
								yourMove = player6Attacks[2].move6;
								break;
							case "4":
								yourMove = player6Attacks[3].move6;
								break;
							default:
								alert("Please pick a move");
								whoAttacks = 1;//to prevent it going to monster attack if you don't select correct number
								battleProgress();
								break;
						}	
					}
					playerAttackMove();
					break;
				default:
					break;
			}
			break;
			
		default:
			break;
	}
}
function monsterAttackMove(){
	var armorFlag = 1;
	var youBlock = Math.floor((Math.random() * 10) + 1); //you block attack 1 in 10 chance
	var criticalHit = Math.floor((Math.random() * 10) + 1);//1 in 10 chance of critical
	if (playerArmorStrength > 0 && youBlock != 1){
		if (criticalHit == 1){//critical hit adds more damage
			var damageArray = [10,20,30,40][Math.floor(Math.random()*4)];
			damage += damageArray;
			alert(monsterTypes[monsterID].type+" gets a critical hit!");			
			alert(monsterTypes[monsterID].type+" attacks with "+monsterMove+" which gives "+damage+" damage.");
			playerArmorStrength -= damage;
		}
		else {
			alert(monsterTypes[monsterID].type+" attacks with "+monsterMove+" which gives "+damage+" damage.");
			playerArmorStrength -= damage;
		}
		//alert("Your armor is now at "+playerArmorStrength+" and health is at "+playerHealth+" HP!");
		if (playerArmorStrength <= 0 && armorFlag == 1){//armor check needs to only run once
			alert("Your armor is gone!");
			armorFlag = 0;
		}
		else if (playerArmorStrength <= 0 && armorFlag == 0){
			battleProgress();
		}
		battleProgress();
	}
	else if (playerArmorStrength > 0 && youBlock == 1){
		alert("You blocked the monster's attack!");
		whoAttacks = 1;
		battleProgress();//since you blocked you get to attack next
	}
	else if (playerHealth > 0 && youBlock != 1){
		if (criticalHit == 1){
			var damageArray = [10,20,30,40][Math.floor(Math.random()*4)];
			damage += damageArray;
			alert(monsterTypes[monsterID].type+" gets a critical hit!");			
			alert(monsterTypes[monsterID].type+" attacks with "+monsterMove+" which gives "+damage+" damage.");
			playerHealth -= damage;
		}
		else {
			alert(monsterTypes[monsterID].type+" attacks with "+monsterMove+" which gives "+damage+" damage.");
			playerHealth -= damage;
		}
		//alert("Your health is now at "+playerHealth+" HP!");
		if (playerHealth <= 0){
			alert("You have been slain by the "+monsterTypes[monsterID].type+"! The match is lost!");
			newMatch = false;
			endFight();
		}
		else {
			battleProgress();
		}
	}
	else if (playerHealth > 0 && youBlock == 1){
		alert("You blocked the monster's attack!");
		whoAttacks = 1;
		battleProgress();
	}
	else if (playerHealth <= 0){
		alert("You have been slain by the "+monsterTypes[monsterID].type+"! The match is lost!");
		newMatch = false;
		endFight();
	}
}
function playerAttackMove(){
	var usePower = Math.floor((Math.random() * 10) + 1); //Use special ability 1 in 10 chance
	var criticalHit = Math.floor((Math.random() * 10) + 1);//1 in 10 chance of critical
	var monsterBlock = Math.floor((Math.random() * 10) + 1); //monster blocks attack 1-10 chance
	if (monsterHealth > 0 && monsterBlock != 1){
		if (criticalHit == 1){
			var damageArray = [10,20,30,40][Math.floor(Math.random()*4)];
			playerDamage += damageArray;
			alert(className+" "+player+" gets a critical hit!");
			alert(className+" "+player+" attacks with "+yourMove+" which gives "+playerDamage+ " damage.");
			monsterHealth -= playerDamage;
		}
		else {
			if (usePower == 1){
				alert(className+" "+player+" uses their special power of "+abilityName+"! Your power "+abilityResult);
				if (playerClass == 1){//Spellcasting
					playerArmorStrength += 2;		
				}
				else if (playerClass == 2){//Strong Swing
					playerDamage += 5;
				}
				else if (playerClass == 3){//Swift Stab
					playerDamage += 3;
				}
				else if (playerClass == 4){//Health Steal
					monsterHealth -= 5;
					playerHealth += 5;
				}
				else if (playerClass == 5){//Stealth Attack
					monsterHealth -= 2;
				}
				else if (playerClass == 6){//Quick Heal
					playerHealth += 5;
				}
				alert(className+" "+player+" attacks with "+yourMove+" which gives "+playerDamage+ " damage.");
				monsterHealth -= playerDamage;
			}
			else {
				alert(className+" "+player+" attacks with "+yourMove+" which gives "+playerDamage+ " damage.");
				monsterHealth -= playerDamage;
			}
		}
		//alert(monsterTypes[monsterID].type+" health is now at "+monsterHealth+" HP!");
		if (monsterHealth <= 0){
			alert("You have slain the "+monsterTypes[monsterID].type+"! The match is won!");
			newMatch = false;
			endFight();
		}
		else {
			battleProgress();
		}	
	}
	else if (monsterHealth > 0 && monsterBlock == 1){ 
		alert("Monster blocks your attack!");
		monsterAttackMove();//since monster blocked, it attacks next
	}
	else if (monsterHealth <= 0){
		alert("You have slain the "+monsterTypes[monsterID].type+"! The match is won!");
		newMatch = false;
		endFight();
	}
}
function beginFight(){
	startGame();//begin adventure needs this function
	Choices();//begin adventure needs this function
	randomMonster();
	var firstBlow = Math.floor(Math.random() * 3); //0 or 1
	var enemyStrikeFirstFlag = Math.floor(Math.random() * 2);
	var successfulEscape = Math.floor(Math.random() * 2);
	alert("A "+monsterRating+" "+monsterTypes[monsterID].type+ " appears! \n"+gender+" has "+monsterHealth+" HP.");
	if (newMatch == true){		
		if (firstBlow == 1){
			var move = prompt("You have the element of surprise! Do you strike first or retreat?","strike = 1, retreat = 2");
			if (move == "1"){
				whoAttacks = 1;
				battleProgress();
			}
			else if (move == "2"){
				if (successfulEscape == 1){
					alert("You have silently retreated since the enemy didn't spot you!");//condition for retreat 
					newMatch = false;
					endFight();
				}
				else if (successfulEscape == 0){
					alert("You have been spotted by the monster. Escape is impossible! Monster strikes first!");
					successfulEscape = Math.floor(Math.random() * 2);
					monsterAttackMove();
				}
			}
			else {
				alert("Please select either option '1' or '2'.");
			}
		}
		else if (firstBlow == 0){
			if (enemyStrikeFirstFlag == 1){//enemy attack first
				alert("Monster has the first strike on you!");
				monsterAttackMove();
			}
			else if (enemyStrikeFirstFlag == 0){ // you attack first 
				alert("You have the first strike on monster!");
				whoAttacks = 1;
				battleProgress();
			}
		}
	}
}
function endFight(){
	if (newMatch == false){
		//alert("Your remaining health: "+playerHealth);
		var choice = prompt("Do you want to start the match over with a new character and scenario?","Yes = 1, No = 2");
		if (choice == "1"){
			newMatch = true;
			firstBlow = Math.floor(Math.random() * 3);
			beginFight();
		}
		else if (choice == "2"){
			this.form.reset();
			//document.getElementById("test").reset();
		}
		else {
			alert("Please select either option '1' or '2'.");
		}
	}
}