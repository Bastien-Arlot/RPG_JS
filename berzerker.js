
class Berzerker extends Character{
    constructor(hp = 8, dmg = 4, mana = 0, status = "alive", rage = false, name = "Draven") {
        super(hp, dmg, mana, status, name);
        this.rage = rage;
    };
    attackSpe = () => {
        this.dmg += 1;
        this.hp -= 1;
        alert(`You've invocked your special power, RAGE, for the rest of the game you'll gain +1 damage.
        With every power come a price, it seems you also lost an hp ! You have now ${this.dmg} damages and ${this.hp} hp`);
        }

};
