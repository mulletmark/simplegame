function endFight(){
	if (newMatch == false){
		//alert("Your remaining health: "+playerHealth);
		var choice = prompt("Do you want to start the match over with a new character and scenario? Your name will remain the same if you choose 1.","Yes = 1, No = 2");
		if (choice == "1"){
			newMatch = true;
			firstBlow = Math.floor(Math.random() * 3);
			beginFight();
		}
		else if (choice == "2"){	
			localStorage.clear();
			this.document.reset();
			//document.getElementById("test").reset();
		}
		else {
			alert("Please select either option '1' or '2'.");
			endFight();
		}
	}
}