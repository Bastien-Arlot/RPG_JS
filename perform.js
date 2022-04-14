
startGame = () => {
    game = new Game()
    game.initialize();
    game.attackMenu();
    if(game.turnLeft === 0 && game.choosenCharacter.status === "alive"){
        alert(`You were right to chose ${game.choosenCharacter.name} as your champion.... You are the winners! Heaven is waiting for you`);

    }else{
        alert(`Seems like you weren't worth of this LastChance. I hope you'll enjoy your trip to Hell`)
    }

}
document.querySelector("#start-screen").addEventListener("click", startGame);
const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;