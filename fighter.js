
class Fighter extends Character{
    constructor(hp = 12, dmg = 4, mana = 20, status = "alive", darkvision = false, name = "Grace", defense = 0) {
        super(hp, dmg, mana, status, name);
        this.darvision = darkvision;
        this.defense = defense;
    };
    attackSpe = (victim) => {
        if (this.mana < 20){
            return alert("you don't have enough mana, select another option");
        } else{
           victim.takeDamage(this,5);
           this.mana -= 20;
           this.defense += 2;
        }
    }
};
