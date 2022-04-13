
class Berzerker extends Character{
    constructor(hp = 8, dmg = 4, mana = 0, status = "alive", rage = false, name = "Draven") {
        super(hp, dmg, mana, status, name);
        this.rage = rage;
    };
};

const berzerker1 = new Berzerker();
console.log(berzerker1);