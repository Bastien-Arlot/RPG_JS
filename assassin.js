
class Assassin extends Character{
    constructor(hp = 6, dmg = 6, mana = 20, status = "alive", shadowHit = false, name = "Carl") {
        super(hp, dmg, mana, status, name);
        this.shadowHit= shadowHit;
    };
};
