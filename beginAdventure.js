function beginAdventure(){	
	function newEnvironment(newEnvironment){
		this.newEnvironment = newEnvironment;
	}

	var Environments = new Array();
	Environments[0] = new newEnvironment("Dark Forest");
	Environments[1] = new newEnvironment("Snowy Mountain");
	Environments[2] = new newEnvironment("Briny Bog");
	Environments[3] = new newEnvironment("Desert Plains");
	Environments[4] = new newEnvironment("Jungle");
	Environments[5] = new newEnvironment("Savannah of Longing");
	Environments[6] = new newEnvironment("Volcanic Heights");
	Environments[7] = new newEnvironment("Mushroom Gorge");
	Environments[8] = new newEnvironment("Castle Mighty");
	Environments[9] = new newEnvironment("Lake of Indecision");
	Environments[10] = new newEnvironment("Morlack Cave");
	Environments[11] = new newEnvironment("Misty Peaks");
	Environments[12] = new newEnvironment("Forest of Charn");
	Environments[13] = new newEnvironment("Arag Highway");

	callNewEnvironment = function(){
		leftChoice = ""; rightChoice = ""; upChoice = ""; backChoice = "";
		var selection;
		var firstOne = Math.floor(Math.random() * Environments.length);
		var secondOne = Math.floor(Math.random() * Environments.length);
		firstOne == secondOne ? Environments.slice(firstOne,secondOne + 1) : (firstOne <= secondOne ? selectEnvironments = Environments.slice(firstOne,secondOne) : selectEnvironments = Environments.slice(secondOne,firstOne));
		localStorage.setItem("selectEnvironments", JSON.stringify(selectEnvironments));
		
		for (var i = selectEnvironments.length; i--;){ //if 1 element this loop isn't accessed
			EnvironmentID = Math.floor(Math.random() * selectEnvironments.length);
			var index = selectEnvironments[EnvironmentID].newEnvironment;
			selectEnvironments.splice(EnvironmentID,1);
			if (!leftChoice && leftChoice != index){
				leftChoice = index;
			}
			else if (!rightChoice && rightChoice != index){
				rightChoice = index;
			}
			else if (!upChoice && upChoice != index){
				upChoice = index;
			}
			else if (!backChoice && backChoice != index){
				backChoice = index;
			}
			else{
				chooseEnvironment();
			}
		}
		chooseEnvironment();
	};
	
	callNewEnvironment();
}
	
function chooseNewEnvironment(environment) {
	leftChoice = ""; rightChoice = ""; upChoice = ""; backChoice = "";	
	$("#gameChoiceText").text("You have passed through the first land. Where will you go next?");
	var arrayEnv = JSON.parse(localStorage.getItem("selectEnvironments"));
	//remove previous choice
	var index = arrayEnv.map(function(e) {return e.newEnvironment; }).indexOf(environment);
	if (index !== -1) arrayEnv.splice(index, 1);
	localStorage.setItem("selectEnvironments", JSON.stringify(arrayEnv));
	
	if (arrayEnv.length == 0) {
		$("#gameChoiceText").text("You have made it to your destination. The game is over.");
		newMatch = false;
		$("#gameChoices").hide();
		$("#leftChoiceBtn").show();
		$("#rightChoiceBtn").show();
		$("#upChoiceBtn").show();
		$("#downChoiceBtn").show();		
		setTimeout(function (){
			endFight();
		}, 1000);
	}
	for (var i = arrayEnv.length; i--;){
		EnvironmentID = Math.floor(Math.random() * arrayEnv.length);
		var index = arrayEnv[EnvironmentID].newEnvironment;
		arrayEnv.splice(EnvironmentID,1);
		if (!leftChoice && leftChoice != index){
			leftChoice = index;
		}
		else if (!rightChoice && rightChoice != index){
			rightChoice = index;
		}
		else if (!upChoice && upChoice != index){
			upChoice = index;
		}
		else if (!backChoice && backChoice != index){
			backChoice = index;
		}
	}
	
	leftChoice ? $("#leftChoiceBtn").text(leftChoice) : $("#leftChoiceBtn").hide();
	rightChoice ? $("#rightChoiceBtn").text(rightChoice) : $("#rightChoiceBtn").hide();
	upChoice ? $("#upChoiceBtn").text(upChoice) : $("#upChoiceBtn").hide();
	backChoice ? $("#downChoiceBtn").text(backChoice) : $("#downChoiceBtn").hide();
	$("#gameChoices").show();
	$("#playerChoices").hide();
}

function chooseEnvironment() {
	$("#gameChoiceText").text("You have started your quest and reach a crossroads. Where will you go?");
	leftChoice ? $("#leftChoiceBtn").text(leftChoice) : $("#leftChoiceBtn").hide();
	rightChoice ? $("#rightChoiceBtn").text(rightChoice) : $("#rightChoiceBtn").hide();
	upChoice ? $("#upChoiceBtn").text(upChoice) : $("#upChoiceBtn").hide();
	backChoice ? $("#downChoiceBtn").text(backChoice) : $("#downChoiceBtn").hide();
	$("#gameChoices").show();
	$("#playerChoices").hide();
}

function buttonSelect(environment) {
	var randomEncounter = Math.floor((Math.random() * 4) + 1);
	if (randomEncounter == 3) { // change this back to 1
		localStorage.setItem("environment", environment);
		beginFight();
	}
	else {
		chooseNewEnvironment(environment);
	}
}