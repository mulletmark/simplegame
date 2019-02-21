function beginFight(){
	startGame();//begin adventure needs this function
	Choices();//begin adventure needs this function
	randomMonster();
	var firstBlow = Math.floor(Math.random() * 5); //1 in 5 chance
	var enemyStrikeFirstFlag = Math.floor(Math.random() * 2);
	var successfulEscape = Math.floor(Math.random() * 2);
	alert("A "+monsterRating+" "+monsterTypes[monsterID].type+ " appears! \n"+gender+" has "+monsterHealth+" HP.");
	if (newMatch == true){
		if (firstBlow == 1){
			while (move != "1" || move != "2") {
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
		}
		else {
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