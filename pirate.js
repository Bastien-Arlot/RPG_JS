class Pirate extends Character{
    constructor(hp = 17, dmg = 4, mana = 10, status = "alive", name = "Hook") {
        super(hp, dmg, mana, status, name);
    };
    attackSpe = (victim) => {
        if (this.mana < 30){
            return alert("you don't have enough mana, select another option");
        } else{
            alert(`You've invoked your special power HAMMERSLAM, it seems your opponent will know the HAMMERPOWER.`);
            victim.takeDamage(this, 9);
        }
    }
};