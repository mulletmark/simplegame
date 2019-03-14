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
			alert("You have been slain by the "+monsterTypes[monsterID].type+"! The quest is lost!");
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
		alert("You have been slain by the "+monsterTypes[monsterID].type+"! The quest is lost!");
		newMatch = false;
		endFight();
	}
}