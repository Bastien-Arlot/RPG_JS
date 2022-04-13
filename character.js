
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
            dmg -= this.defense;
            console.log(`Thanks to his Attack Special DarkVision ${this.name} reduce the dammages by 2, unfortunately his power is now gone`)
            this.defense = 0;
        }

        if (this.shadowHit = true){
            this.dmg = 0;
            this.shadowHit = false;
        }

        this.hp -= this.dmg;
        console.log(`${this.dmg} damages were inflicted`);
        if(this.hp <= 0){
            this.status = "dead";
            console.log(`Oh no ${this.name} is ${this.status}`);
            from.mana =+ 20;
            console.log(`${from.name} won 20 mana for his victory, congrats!`)
        } else{
            console.log(` ${this.name} has ${this.hp} hp left`);
        }

    }
    dealDamage = (victim) => {
        if(victim.hp > 0 && this.status === "alive") {
            console.log(`${this.name} has decided to attack ${victim.name}`)
            victim.takeDamage(this, this.dmg)
        }else{
            alert(`This man is already dead, your turn is lost for NOTHING`)
        }
    }

}