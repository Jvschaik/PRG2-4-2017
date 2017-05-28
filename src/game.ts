import Snake from './snake';

class Game {

    private static instance : Game;
    private snake: Snake;

    constructor() {
     this.snake = new Snake();
    }

    public static getInstance(){
        if(! Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance
    }

}

// load
window.addEventListener("load", function() {
    let g : Game = Game.getInstance();
});

export default Game;
