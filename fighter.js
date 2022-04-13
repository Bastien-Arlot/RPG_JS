
class Fighter extends Character{
    constructor(hp = 12, dmg = 4, mana = 20, status = "alive", darkvision = false, name = "Grace") {
        super(hp, dmg, mana, status, name);
        this.darvision = darkvision;
    };

};
