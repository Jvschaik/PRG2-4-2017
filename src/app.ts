import Game from './game';
import * as PIXI from 'pixi.js';

class App {
    public static PixiApp: PIXI.Application;

    constructor() {

        App.PixiApp = new PIXI.Application(800, 600, {backgroundColor : 0x3C3F41});
        document.body.appendChild(App.PixiApp.view);

        new Game();
    }

    public static addToGame(child): void {
        App.PixiApp.stage.addChild(child);
    }
}

export default App;

new App();
