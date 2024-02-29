import { Settings } from "../scenes/settings.js";

export class Laberinto {

    static array_laberinto = [
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,5,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,5,9],
        [9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],
    
        [9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],
        [9,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,9],
        [9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],
    
        [9,1,1,1,1,9,1,1,1,9,1,1,1,9,1,1,1,1,9],
        [9,9,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,9,9],
        [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
    
        [9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],
        [9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],
        [0,1,1,1,1,9,1,1,1,1,1,1,1,9,1,1,1,1,0],
    
        [9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],
        [9,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    ];

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.tile = this.relatedScene.physics.add.staticGroup();

        for (let i = 0; i < Laberinto.array_laberinto.length; i ++) {
            for (let ii = 0; ii < Laberinto.array_laberinto[i].length; ii ++) {

                const valor = Laberinto.array_laberinto[i][ii];

                if (valor === 9) {
                    this.tile.create(ii * Settings.tileXY.x, i * Settings.tileXY.y, 'tile').refreshBody();
                }
            }
        }

        console.log(this.tile);
    }

    get() {
        return this.tile;
    }
}

