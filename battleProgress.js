function battleProgress(){ //called after match begins
	callAttack(number);//randomize monster moves and damage
	callPlayerAttack(playerNumber);//randomize player moves
	
	//randomize damage 
	damage = Math.floor((Math.random() * 10) + 1);
	playerDamage = Math.floor((Math.random() * 10) + 1);
	
	//determine who attacks next move
	switch (whoAttacks) {
		case 0:
			whoAttacks = Math.floor(Math.random() * 2);
			switch (monsterTypes[monsterID].type) {
				case "Troll":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Goblin":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Witch":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Snake King":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Eye Ball":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Cyclops":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Zombie":
					monsterMove = attackArray[attackID].monsterAttack;
					monsterAttackMove();
					break;
				case "Dragon":
					monsterMove = attackArray[attackID].monsterAttack;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nFreeze Spell = 1, Fire Spell = 2, Wind Spell = 3, Rock Spell = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[0].move;
								break;
							case "2":
								yourMove = playerAttacks[1].move;
								break;
							case "3":
								yourMove = playerAttacks[2].move;
								break;
							case "4":
								yourMove = playerAttacks[3].move;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nSlash = 1, Stab = 2, Cut = 3, Evicerate = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[4].move;
								break;
							case "2":
								yourMove = playerAttacks[5].move;
								break;
							case "3":
								yourMove = playerAttacks[6].move;
								break;
							case "4":
								yourMove = playerAttacks[7].move;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nSpear = 1, Upper Cut = 2, Horse Charge = 3, Paladin Strike = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[8].move;
								break;
							case "2":
								yourMove = playerAttacks[9].move;
								break;
							case "3":
								yourMove = playerAttacks[10].move;
								break;
							case "4":
								yourMove = playerAttacks[11].move;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nQuick Stab = 1, Choke = 2, Morning Star = 3, Blow Dart = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[12].move;
								break;
							case "2":
								yourMove = playerAttacks[13].move;
								break;
							case "3":
								yourMove = playerAttacks[14].move;
								break;
							case "4":
								yourMove = playerAttacks[15].move;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nWhip = 1, Short Stab = 2, Poison Dart = 3, Sling Throw = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[16].move;
								break;
							case "2":
								yourMove = playerAttacks[17].move;
								break;
							case "3":
								yourMove = playerAttacks[18].move;
								break;
							case "4":
								yourMove = playerAttacks[19].move;
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
						yourMove = playerAttackArray[playerAttackID].move;
					}
					else if (playerChoiceFlag == 1){
						playerMove = prompt("Select a move: \nHoly Prayer = 1, Spell of Atonement = 2, Holy Fire = 3, Words of Peace = 4","move");
						switch (playerMove) {
							case "1":
								yourMove = playerAttacks[20].move;
								break;
							case "2":
								yourMove = playerAttacks[21].move;
								break;
							case "3":
								yourMove = playerAttacks[22].move;
								break;
							case "4":
								yourMove = playerAttacks[23].move;
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