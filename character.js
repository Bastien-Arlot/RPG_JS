
class Character{
    constructor(hp, dmg, mana, status, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
        this.name = name;
    }
    takeDamage = (from, dmg) => {
        if (this.defense > 0){
            // dmg -= this.defense;
            dmg -= 2;
            alert(`Thanks to his Attack Special DarkVision ${this.name} reduce the dammages by 2, unfortunately his power is now gone`)
            this.defense = 0;
        }

        if (this.shadowHit > 0){
            dmg = 0;
            this.shadowHit = 0;
        }

        this.hp -= dmg;
        alert(`${dmg} damages were inflicted`);
        if(this.hp <= 0){
            this.status = "dead";
            alert(`Oh no ${this.name} is ${this.status}`);
            from.mana += 20;
            from.hp += 10;
            alert(`${from.name} won 20 mana and 10hp for his victory, he now has ${from.hp} hp and ${from.mana} mana!`)
        } else{
            alert(` ${this.name} has ${this.hp} hp left`);
        }

    }
    dealDamage = (victim) => {
        if(victim.hp > 0 && this.status === "alive") {
            alert(`${this.name} has decided to attack ${victim.name}`)
            victim.takeDamage(this, this.dmg)
        }else{
            alert(`This man is already dead, your turn is lost for NOTHING`)
        }
    }
    stats = () => {
        let { name, hp, mana, dmg} = this;
        return `${name} : ${hp} HP | ${mana} Mana | ${dmg} Atk`;
    };


}