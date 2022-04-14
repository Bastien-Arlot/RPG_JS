class Game {
    constructor(turnLeft = 3, state = true, players = [], choosenCharacter) {
        this.turnLeft = turnLeft;
        this.state = state;
        this.players = players;
        this.choosenCharacter = choosenCharacter;
    }

    newTurn = () => {
        this.turnLeft -= 1;
        alert(`You'll have to survive for ${this.turnLeft} turn`);
    }

    watchStats = () => {
        console.log("--------------- Characters still in game ----------------");
        this.players.forEach((player) => {
            if (player.status === "alive") {
                console.log(player.stats());
            }
        });
        console.log("---------------------------------------------------------");
    };

    initialize = () => {
        let fighter = new Fighter();
        let assassin = new Assassin();
        let paladin = new Paladin();
        let monk = new Monk();
        let berzerker = new Berzerker();
        let wizard = new Wizard();
        let pirate = new Pirate();
        this.players.push(fighter, assassin, paladin, monk, berzerker, wizard, pirate);
        alert(`                               Welcome to the Last Chance
                       -----------------------------------
        During your short life you were an evil person, God decided to put you in a fight against 6 persons that were far more criminal than you in their life. If you succeed to stay alive for ${this.turnLeft} turn you'll go to heaven, if not... Hell is waiting for you!`);
        let menuChoice = prompt(`you'll know have to choose your character:
        press 1 fighter
        press 2 assassin
        press 3 paladin
        press 4 monk
        press 5 berzerker
        press 6 wizard
        press 7 pirate`);
        let playerchoice;
        switch (menuChoice) {
            case "1":
                alert(`${fighter.name} will be your fighter`);
                this.choosenCharacter = fighter;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "2":
                alert(`${assassin.name} will be your assassin`);
                this.choosenCharacter = assassin;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "3":
                alert(`${paladin.name} will be your paladin`);
                this.choosenCharacter = paladin;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "4":
                alert(`${monk.name} will be your monk`);
                this.choosenCharacter = monk;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "5":
                alert(`${berzerker.name} will be your berzerker`);
                this.choosenCharacter = berzerker;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "6":
                alert(`${wizard.name} will be your wizard`);
                this.choosenCharacter = wizard;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
            case "7":
                alert(`${pirate.name} will be your pirate`);
                this.choosenCharacter = pirate;
                this.players = this.players.filter(x => x.name !== this.choosenCharacter.name)
                break;
        }

    }
    attackMenu = () => {
        while (this.turnLeft !== 0 && this.choosenCharacter.status === "alive") {
            console.log(`There is only ${this.turnLeft} turns left`);
            let attackMenuChoice = prompt(`what ${this.choosenCharacter.name}  should do?
         1 :attack ${this.players.map(x => x.name).join(" or ")}
         2 : see the stats of everyone
         3 : use his special attack vs someone ?`);
            switch (attackMenuChoice) {
                case "1":
                    let victimChoice = prompt(`                                Who do you want to fight?
                             -------------------------
            ${this.players.map(x => x.name)} are their name,
            1, 2, 3, 4, 5 and 6 are their numbers, chose  your target with 
            a number carefully `);
                    switch (victimChoice) {
                        case "1":
                            this.choosenCharacter.dealDamage(this.players[0]);

                            if (this.players[0].status === "alive") {
                                alert(`${this.players[0].name} counter attack!`)
                                this.players[0].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "2":
                            this.choosenCharacter.dealDamage(this.players[1]);
                            this.players[1].dealDamage(this.choosenCharacter);
                            if (this.players[1].status === "alive") {
                                alert(`${this.players[1].name} counter attack!`)
                                this.players[1].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "3":
                            this.choosenCharacter.dealDamage(this.players[2]);
                            if (this.players[2].status === "alive") {
                                alert(`${this.players[2].name} counter attack!`)
                                this.players[2].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "4":
                            this.choosenCharacter.dealDamage(this.players[3]);
                            if (this.players[3].status === "alive") {
                                alert(`${this.players[3].name} counter attack!`)
                                this.players[3].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "5":
                            this.choosenCharacter.dealDamage(this.players[4]);
                            if (this.players[4].status === "alive") {
                                alert(`${this.players[4].name} counter attack!`)
                                this.players[4].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "6":
                            this.choosenCharacter.dealDamage(this.players[5]);
                            if (this.players[5].status === "alive") {
                                alert(`${this.players[5].name} counter attack!`)
                                this.players[5].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                    }
                    break;
                case "2":
                    this.watchStats();
                    break;
                case "3":
                    let victimAttSpeChoice = prompt(`who do you want to fight?
                 ${this.players.map(x => x.name)} are their name,
                  1, 2, 3 and 4 are their numbers, chose  your target with a number carefully `);
                    switch (victimAttSpeChoice) {
                        case "1":
                            this.choosenCharacter.attackSpe(this.players[0]);
                            if (this.players[0].status === "alive") {
                                alert(`${this.players[0].name} counter attack!`)
                                this.players[0].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "2":
                            this.choosenCharacter.attackSpe(this.players[1]);
                            if (this.players[1].status === "alive") {
                                alert(`${this.players[1].name} counter attack!`)
                                this.players[1].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "3":
                            this.choosenCharacter.attackSpe(this.players[2]);
                            if (this.players[2].status === "alive") {
                                alert(`${this.players[2].name} counter attack!`)
                                this.players[2].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "4":
                            this.choosenCharacter.attackSpe(this.players[3]);
                            if (this.players[3].status === "alive") {
                                alert(`${this.players[3].name} counter attack!`)
                                this.players[3].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "5":
                            this.choosenCharacter.attackSpe(this.players[4]);
                            if (this.players[4].status === "alive") {
                                alert(`${this.players[4].name} counter attack!`)
                                this.players[4].dealDamage(this.choosenCharacter);
                            }
                            ;
                            this.newTurn();
                            break;
                        case "6":
                            this.choosenCharacter.attackSpe(this.players[5]);
                            if (this.players[5].status === "alive") {
                                alert(`${this.players[5].name} counter attack!`)
                                this.players[5].dealDamage(this.choosenCharacter);
                            }
                            ;
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