import { Laberinto } from "./laberinto.js";

// ===========================================================================
export class Puntitos {

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.puntito = this.relatedScene.physics.add.staticGroup();

        for (let i = 0; i < Laberinto.array_laberinto.length; i ++) {
            for (let ii = 0; ii < Laberinto.array_laberinto[i].length; ii ++) {

                const valor = Laberinto.array_laberinto[i][ii];

                if (valor === 1) {
                    this.puntito.create(ii * Laberinto.tileXY[0], i * Laberinto.tileXY[1], 'puntito').setScale(0.5).refreshBody();
                }
            }
        }

        console.log(this.puntito);
    }

    get() {
        return this.puntito;
    }
}
