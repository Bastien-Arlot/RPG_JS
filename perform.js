
startGame = () => {
    game = new Game()
    game.initialize();
    game.attackMenu();

}
document.querySelector("#start-screen").addEventListener("click", startGame);