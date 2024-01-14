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
                    
                    this.puntito.create(
                        ii * Laberinto.tileXY[0],
                        i * Laberinto.tileXY[1],
                        'puntito'
                    ).setScale(0.5).setData('puntos', 10).refreshBody();
                }
            }
        }

        console.log(this.puntito);
    }

    get() {
        return this.puntito;
    }
}

// ===========================================================================
export class PuntitosGordos {

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.puntitosgordos = this.relatedScene.physics.add.staticGroup();

        for (let i = 0; i < Laberinto.array_laberinto.length; i ++) {
            for (let ii = 0; ii < Laberinto.array_laberinto[i].length; ii ++) {

                const valor = Laberinto.array_laberinto[i][ii];

                if (valor === 5) {
                    this.puntitosgordos.create(ii * Laberinto.tileXY[0], i * Laberinto.tileXY[1], 'puntito').setScale(1.6).refreshBody();
                }
            }
        }

        this.relatedScene.tweens.add({
            targets: this.puntitosgordos.getChildren(),
            scale: 0.8,
            tint: new Phaser.Display.Color(255, Phaser.Math.Between(150, 255), 255).color,
            yoyo: true,
            duration: 900,
            repeat: -1
        });

        console.log(this.puntitosgordos);
    }

    get() {
        return this.puntitosgordos;
    }
}
