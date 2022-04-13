class Game{
    constructor(turnLeft = 10) {
        this.turnLeft = turnLeft;
    }
    newTurn = () => {
       if( this.turnLeft !== 0) {
           this.turnLeft -= 1;
       }else{
           console.log('the game is already over!');
       }
    }
}