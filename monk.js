
class Monk extends Character{
    constructor(hp = 8, dmg = 2, mana = 200, status = "alive", heal = false, name = "Moana") {
        super(hp, dmg, mana, status, name);
        this.heal = heal;
    };
};

const monk1 = new Monk();
console.log(monk1);