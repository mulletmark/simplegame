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
				switch (playerClass) {
					case "1": //Spellcasting
						playerArmorStrength += 2;
						break;
					case "2": //Strong Swing
						playerDamage += 5;
						break;
					case "3": //Swift Stab
						playerDamage += 3;
						break;
					case "4": //Health Steal
						monsterHealth -= 5;
						playerHealth += 5;
						break;
					case "5": //Stealth Attack
						monsterHealth -= 2;
						break;
					case "6": //Quick Heal
						playerHealth += 5;
						break;
					default:
						break;
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