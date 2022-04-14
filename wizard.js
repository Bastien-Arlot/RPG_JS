
class Wizard extends Character{
    constructor(hp = 10, dmg = 2, mana = 200, status = "alive", name = "Boris") {
        super(hp, dmg, mana, status, name);
    };
    attackSpe = (victim) => {
        if (this.mana < 25){
            return alert("you don't have enough mana, select another option");
        } else{
            alert(`You've invoked your special power FIREBALL, it seems your opponent will have an hot time...`);
            victim.takeDamage(this, 7);
        }
    }
};