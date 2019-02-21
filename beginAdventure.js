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
		EnvironmentID = Math.floor(Math.random() * Environments.length);
	};
	
	callNewEnvironment();
	var land = Environments[EnvironmentID].newEnvironment;
	alert(land);
	
	beginFight();
	
	//this begins the quest. Choose between several different environments and scenarios in each. At random points enemies will be encountered. If they are defeated,
	//the player continues to another scenario. The enemy encounters are random and sometimes you can travel far without meeting one. The number of scenarios you have 
	//pass through should be random as well. Possibly have a final boss? Player health should be high so you can survive multiple encounters or you should have a health
	//restore system. maybe after encounters you can gain new abilities or new armor.
}