
class Monk extends Character{
    constructor(hp = 8, dmg = 2, mana = 200, status = "alive", heal = false, name = "Moana") {
        super(hp, dmg, mana, status, name);
        this.heal = heal;
    };
    attackSpe = () => {
        if (this.mana < 25){
            return alert("you don't have enough mana, select another option");
        } else{
            this.hp += 8;
            alert(`Your power is so strong it heal you of 8hp! You have now ${this.hp} hp but it seems you didnt hit your opponent.
            Since he still feels threatened i think it won't leave you alone just like that...`);

        }
    }
};
