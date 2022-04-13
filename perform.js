
startGame = () => {
    game = new Game()
    game.initialize();
    game.attackMenu();
    if(game.turnLeft === 0){
        alert(`${game.players.filter(x => x.status === "alive").map(x => x.name)} and ${game.choosenCharacter.name} are the winners!!!`);
    }

}
document.querySelector("#start-screen").addEventListener("click", startGame);