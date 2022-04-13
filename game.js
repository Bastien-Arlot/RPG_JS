class Game {
    constructor(turnLeft = 3, state = true, players = [], choosenCharacter) {
        this.turnLeft = turnLeft;
        this.state = state;
        this.players = players;
        this.choosenCharacter = choosenCharacter;
    }

    newTurn = () =>{
            this.turnLeft -= 1;
            alert(`There is only ${this.turnLeft} turn`);
    }

    initialize = () => {
        let fighter = new Fighter();
        let assassin = new Assassin();
        let paladin = new Paladin();
        let monk = new Monk();
        let berzerker = new Berzerker();
        this.players.push(fighter, assassin, paladin, monk, berzerker);
        console.log(`Welcome to the battle of heroes you will have ${this.turnLeft} to be the absolute winner, i hope you are ready!`);
        let menuChoice = prompt(`you'll know have to choose your fighter:
        press 1 fighter
        press 2 assassin
        press 3 paladin
        press 4 monk
        press 5 berzerker`);
        let playerchoice;
        switch (menuChoice) {
            case "1":
                console.log(`${fighter.name} will be your fighter`);
                this.choosenCharacter = fighter;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "2":
                console.log(`${assassin.name} will be your fighter`);
                this.choosenCharacter = assassin;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "3":
                console.log(`${paladin.name} will be your fighter`);
                this.choosenCharacter = paladin;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "4":
                console.log(`${monk.name} will be your fighter`);
                this.choosenCharacter = monk;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "5":
                console.log(`${berzerker.name} will be your fighter`);
                this.choosenCharacter = berzerker;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
        }

    }
    attackMenu = () => {
    while(this.turnLeft !== 0) {
        console.log(`There is only ${this.turnLeft} turn`);
        let attackMenuChoice = prompt(`what ${this.choosenCharacter.name}  should do?
         1 :attack ${this.players.map(x => x.name).join(" or ")}
         2 : see the stats of everyone
         3 : use your special attack vs someone ?`);
        switch (attackMenuChoice) {
            case "1":
                let victimeChoice = prompt(`who do you want to fight? ${this.players.map(x => x.name)} are their name, 1, 2, 3 and 4 are their numbers, chose  your target with a number carefully `)
                switch (victimeChoice) {
                    case "1":
                        this.choosenCharacter.dealDamage(this.players[0]);
                        this.newTurn();
                        break;
                    case "2":
                        this.choosenCharacter.dealDamage(this.players[1]);
                        this.newTurn();
                        break;
                    case "3":
                        this.choosenCharacter.dealDamage(this.players[2]);
                        this.newTurn();
                        break;
                    case "4":
                        this.choosenCharacter.dealDamage(this.players[3]);
                        this.newTurn();
                        break;
                }
        }
    }
    }
}



// menu = (nbr) => {
//     let menuChoice = prompt(`you'll know have to choose your fighter:
//     press 1 fighter
//     press 2 assassin
//     press 3 paladin
//     press 4 monk
//     press 5 berzerker`);
//
//     switch(menuChoice){
//         case "1":
//             console.log(`${this.fighter.name}`)
//     }


//     }
//
// }