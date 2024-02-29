import { Settings } from '../scenes/settings.js';
import { Laberinto } from "./laberinto.js";

export class Fantasma {

    static VEL = 4;

    // [velX, velY, addWidth, addHeight, angle]
    static INFO_DIRECCION = {
        left: [-1, 0, 0, 0, 180],
        right: [1, 0, 1, 0, 0],
        up: [0, -1, 0, 0, 270],
        down: [0, 1, 0, 1, 90]
    };

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.fantasmas = this.relatedScene.physics.add.group({
            key: ['fantasma0', 'fantasma0', 'fantasma0', 'fantasma0'],
            frameQuantity: 1,
            setXY: {
                x: Settings.fantasmasIniXY.azul[0] * Settings.tileXY.x,
                y: Settings.fantasmasIniXY.azul[1] * Settings.tileXY.y,
                stepX: Settings.tileXY.x * 3
            }
        });

        this.fantasmas.children.iterate((fant => {

            fant.setAngle(0).setScale(0.1, 0.11).setFrame(0);
        }));
        
        this.intentoGiro = 'right';
        this.direccion = this.intentoGiro;

        this.relatedScene.anims.create({
            key: 'sabana', 
            frames: this.relatedScene.anims.generateFrameNumbers('fantasma0', {start: 0, end: 1}),
            frameRate: 8,
            yoyo: true,
            repeat: -1
        });

        this.fantasmas.children.iterate(fant => {
            fant.anims.play('sabana', true);
        });

        console.log(this.fantasmas);
    }

    update() {

        /* const direcc = Jugador.INFO_DIRECCION;

        Object.keys(Jugador.INFO_DIRECCION).forEach(tecla => {
            if (this.controles[tecla].isDown) this.intentoGiro = tecla;
        });

        if (this.fantasmas.x % Settings.tileXY.y === 0 && this.fantasmas.y % Settings.tileXY.y === 0) {
            
            const x = Math.floor(this.fantasmas.x / Settings.tileXY.y) + direcc[this.intentoGiro][0];
            const y = Math.floor(this.fantasmas.y / Settings.tileXY.y) + direcc[this.intentoGiro][1];
            
            if (Laberinto.array_laberinto[y][x] !== 9) {
                this.direccion = this.intentoGiro;
                this.fantasmas.setAngle(direcc[this.direccion][4]);
            }
        }

        const ancho = direcc[this.direccion][2] * (Settings.tileXY.y - Jugador.VEL);
        const alto = direcc[this.direccion][3] * (Settings.tileXY.y - Jugador.VEL);
        const offsetX = direcc[this.direccion][0] * Jugador.VEL;
        const offsetY = direcc[this.direccion][1] * Jugador.VEL;
        
        const x = Math.floor((this.fantasmas.x + offsetX + ancho) / Settings.tileXY.y);
        const y = Math.floor((this.fantasmas.y + offsetY + alto) / Settings.tileXY.y);

        if (Laberinto.array_laberinto[y][x] !== 9) {
            this.fantasmas.x += direcc[this.direccion][0] * Jugador.VEL;
            this.fantasmas.y += direcc[this.direccion][1] * Jugador.VEL;
        } */
    }

    get() {
        return this.fantasmas;
    }
}
