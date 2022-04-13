
class Assassin extends Character{
    constructor(hp = 6, dmg = 6, mana = 20, status = "alive", shadowHit = false, name = "Carl") {
        super(hp, dmg, mana, status, name);
        this.shadowHit= shadowHit;
    };
    attackSpe = (victim) => {
        if (this.mana < 20){
            return alert("you don't have enough mana, select another option");
        } else{
            console.log(`You've invoked your special power SHADOW HIT, it seems you won't suffer from any hit for the next attack, but i think that's not all...`);
            victim.takeDamage(7);
            this.shadowHit = true;
        }
    }
};
