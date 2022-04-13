
class Paladin extends Character{
    constructor(hp = 16, dmg = 3, mana = 160, status = "alive", healingLighting = false, name = "Ulder") {
        super(hp, dmg, mana, status, name);
        this.healingLighting = healingLighting;
    };
};
