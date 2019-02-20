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