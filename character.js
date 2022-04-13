
class Character{
    constructor(hp, dmg, mana, status, name) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.status = status;
        this.name = name;
    }
    takeDamage = (dmg) => {
        console.log(`${dmg} damages were inflicted`);
        this.hp -= dmg;
        if(this.hp <= 0){
            this.status = "dead";
            console.log(`Oh no ${this.name} is ${this.status}`);
            this.mana =+ 20;
            console.log(`${this.name} won 20 mana for his murder, congrats!`)
        } else{
            console.log(` ${this.name} has ${this.hp} hp left`);
        }

    }
    dealDamage = (victim) => {
        if(victim.hp > 0) {
            console.log(`${this.name} has decided to attack ${victim.name}`)
            victim.takeDamage(this.dmg);
        }else{
            console.log(`come on you can't attack a dead man, you lost your turn!!`)
        }
    }

}