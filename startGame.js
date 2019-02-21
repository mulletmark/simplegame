//--Global variables--//

var playerClass;
var className;
var classCondition;
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
var EnvironmentID;
var whoAttacks = Math.floor(Math.random() * 2);

function playerName(){
	if (typeof(Storage) !== "undefined") {
		if(localStorage.getItem("gameName")){
			player = localStorage.getItem("gameName");	
		}
		else {
			player = prompt("Please type the name of your player.","Your Name");
		}		
	} else {
		//document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		alert("Sorry, your browser does not support Web Storage...");
	}	
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
			localStorage.setItem("gameName", player);
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
				playerHealth += 10;
				classCondition = "The Wizard's health is increased by 10 HP! Your health is now "+playerHealth+" HP";
				classFlag = 1;
				break;		
			case "2":
				className = "Knight"; 
				abilityName = "Strong Swing";
				abilityResult = "adds 5 hit points to your attack!";
				playerArmorStrength += 10;
				classCondition = "The Knight's armor is increased by 10 HP! Your armor is now "+playerArmorStrength+" HP";
				classFlag = 1;
				break;
			case "3":
				className = "Paladin"; 
				abilityName = "Swift Stab";
				abilityResult = "adds 3 hit points to your attack!";
				playerArmorStrength += 5;
				classCondition = "The Paladin's armor is increased by 5 HP! Your armor is now "+playerArmorStrength+" HP";
				classFlag = 1;
				break;
			case "4":
				className = "Rogue"; 
				abilityName = "Health Steal";
				abilityResult = "steals 5 health points from monster!";
				playerArmorStrength -= 5;
				playerArmorStrength <= 0 ? playerArmorStrength = 1 : playerArmorStrength;
				classCondition = "The Rogue's armor is decreased by 5 HP! Your armor is now "+playerArmorStrength+" HP";
				classFlag = 1;
				break;
			case "5":
				className = "Thief"; 
				abilityName = "Stealth Attack";
				abilityResult = "reduced monster health by 2 health points!";
				playerHealth += 5;
				classCondition = "The Thief's health is increased by 5 HP! Your health is now "+playerHealth+" HP";
				classFlag = 1;
				break;
			case "6":
				className = "Cleric"; 
				abilityName = "Quick Heal";
				abilityResult = "adds 5 health points to your overall health!";
				playerHealth -= 10;
				playerHealth <= 0 ? playerHealth = 1 : playerHealth;
				classCondition = "The Cleric's health is decreased by 10 HP! Your health is now "+playerHealth+" HP";
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
	alert(classCondition);
	Choices();
}
function Choices(){ //choose your moves or let the computer randomize them
	if (playerChoice != "1" || playerChoice != "2"){
		playerChoice = prompt("Do you want to choose your moves or let the computer do it for you?","Choose = 1, Computer = 2");
		if (playerChoice == "1"){
			playerChoiceFlag = 1;
			beginAdventure();
		}
		else if (playerChoice == "2"){
			playerChoiceFlag = 0;
			beginAdventure();
		}
		else {
			alert("Please pick one of the options listed");
			Choices();
		}
	}
}