
class Paladin extends Character{
    constructor(hp = 16, dmg = 3, mana = 160, status = "alive", healingLighting = false, name = "Ulder") {
        super(hp, dmg, mana, status, name);
        this.healingLighting = healingLighting;
    };
    attackSpe = (victim) => {
        if (this.mana < 40){
            return alert("you don't have enough mana, select another option");
        } else{
            this.hp += 5;
            console.log(`Your Healing Lighting is so strong it heal you for 5hp but i think this is not all...`)
            victim.takeDamage(4);

        }
    }
};
