import * as PIXI from 'pixi.js';
import App from './app';

abstract class GameObject {

    public x: number;
    public y: number;
    private width: number;
    private height: number;
    private graphics: PIXI.Graphics;
    private lastUpdate: number;

    constructor(x: number, y: number) {
        this.width = 30; // set with of object at 10
        this.height = 30; // set height of object at 10
        this.x = x;
        this.y = y;

        this.lastUpdate = Date.now();

        // teken mezelf in de canvas met PIXI
        this.graphics = new PIXI.Graphics();
        App.addToGame(this.graphics);
    }

    public move() {
        this.draw();
    }

    private draw() {
        const updateTime = 1000 / 5;
        const curTime = Date.now();
        const difference = curTime - this.lastUpdate;

        // we willen updaten
        // curTime = 1000;
        // lastUpdate = 500;
        // updateTime = 100;
        //
        // 1000 - 500 = 500;
        // 500 > 100 = ja > update
        // lastUpdate = 1000;
        //
        // we willen nog een keer updaten
        // curTime = 1001
        // lastUpdate = 1000
        // updateTime = 100
        // 1001 - 1000 = 1
        // 1 > 100 = nee > niet updaten

        if (difference > updateTime) {
            this.graphics.clear();
            this.graphics.beginFill(0xFFFFFF);
            this.graphics.lineStyle(0, 0, 0);
            this.graphics.drawRect(this.x, this.y, this.width, this.height);
            this.graphics.endFill();

            this.lastUpdate = curTime;
        }
    }
}

export default GameObject;
