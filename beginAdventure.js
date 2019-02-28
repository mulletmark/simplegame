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

	callNewEnvironment = function(){
		var selection;
		var firstOne = Math.floor(Math.random() * Environments.length);
		var secondOne = Math.floor(Math.random() * Environments.length);
		firstOne <= secondOne ? (firstOne == secondOne ? secondOne + 1 : selectEnvironments = Environments.slice(firstOne,secondOne)) : selectEnvironments = Environments.slice(secondOne,firstOne);
		
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
				chooseNewEnvironment();
			}
		}
		chooseNewEnvironment();
	};
	
	callNewEnvironment();
	
	function chooseNewEnvironment() {
		//var choiceOfLocation = prompt("You have started your quest and reach a crossroads. Where will you go? \n","Left to "+leftChoice+" = 1,Right to "+rightChoice+"= 2, Forward to "+upChoice+"= 3, Back to "+backChoice+"= 4");
		leftChoice ? $("#leftChoiceBtn").text(leftChoice) : $("#leftChoiceBtn").hide();
		rightChoice ? $("#rightChoiceBtn").text(rightChoice) : $("#rightChoiceBtn").hide();
		upChoice ? $("#upChoiceBtn").text(upChoice) : $("#upChoiceBtn").hide();
		backChoice ? $("#downChoiceBtn").text(backChoice) : $("#downChoiceBtn").hide();
		$("#gameChoices").show();
		$("#playerChoices").hide();
	}
	//var land = Environments[EnvironmentID].newEnvironment;
	//alert(land);
	
	//beginFight();
	
	//this begins the quest. Choose between several different environments and scenarios in each. At random points enemies will be encountered. If they are defeated,
	//the player continues to another scenario. The enemy encounters are random and sometimes you can travel far without meeting one. The number of scenarios you have 
	//pass through should be random as well. Possibly have a final boss? Player health should be high so you can survive multiple encounters or you should have a health
	//restore system. maybe after encounters you can gain new abilities or new armor.
}