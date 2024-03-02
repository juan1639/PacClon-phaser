import { Settings } from '../scenes/settings.js';
import { Laberinto } from "./laberinto.js";

export class Jugador {

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

        this.jugador = this.relatedScene.physics.add.sprite(
            Settings.pacman.iniX * Settings.tileXY.x,
            Settings.pacman.iniY * Settings.tileXY.y,
            'pacman'
        );

        this.jugador.setAngle(0);
        this.intentoGiro = 'right';
        this.direccion = this.intentoGiro;

        this.relatedScene.anims.create({
            key: 'le-ri-up-do', 
            frames: this.relatedScene.anims.generateFrameNumbers('pacman', {start: 0, end: 6}),
            frameRate: 30,
            yoyo: true,
            repeat: -1
        });

        this.relatedScene.anims.create({
            key: 'turn',
            frames: [{key: 'pacman', frame: 0}],
            frameRate: 20,
        });

        this.jugador.anims.play('le-ri-up-do', true);

        this.controles = this.relatedScene.input.keyboard.createCursorKeys();

        console.log(this.jugador);
    }

    update() {

        const direcc = Jugador.INFO_DIRECCION;

        Object.keys(Jugador.INFO_DIRECCION).forEach(tecla => {
            
            if (this.controles[tecla].isDown) this.intentoGiro = tecla;

            if (Settings.isBotonesYcruceta()) {

                if (this.relatedScene.crucetaup.isDown) {
                    this.intentoGiro = 'up';

                } else if (this.relatedScene.crucetadown.isDown) {
                    this.intentoGiro = 'down';

                } else if (this.relatedScene.crucetaleft.isDown) {
                    this.intentoGiro = 'left';

                } else if (this.relatedScene.crucetaright.isDown) {
                    this.intentoGiro = 'right';
                }
            }
        });

        if (this.jugador.x % Settings.tileXY.x === 0 && this.jugador.y % Settings.tileXY.y === 0) {
            
            const x = Math.floor(this.jugador.x / Settings.tileXY.x) + direcc[this.intentoGiro][0];
            const y = Math.floor(this.jugador.y / Settings.tileXY.y) + direcc[this.intentoGiro][1];
            
            if (Laberinto.array_laberinto[y][x] !== 9) {
                this.direccion = this.intentoGiro;
                this.jugador.setAngle(direcc[this.direccion][4]);
            }
        }

        const ancho = direcc[this.direccion][2] * (Settings.tileXY.x - Jugador.VEL);
        const alto = direcc[this.direccion][3] * (Settings.tileXY.y - Jugador.VEL);
        const offsetX = direcc[this.direccion][0] * Jugador.VEL;
        const offsetY = direcc[this.direccion][1] * Jugador.VEL;
        
        const x = Math.floor((this.jugador.x + offsetX + ancho) / Settings.tileXY.x);
        const y = Math.floor((this.jugador.y + offsetY + alto) / Settings.tileXY.y);

        if (Laberinto.array_laberinto[y][x] !== 9) {
            this.jugador.x += direcc[this.direccion][0] * Jugador.VEL;
            this.jugador.y += direcc[this.direccion][1] * Jugador.VEL;

            // Escapatorias
            if (this.jugador.x > Laberinto.array_laberinto[0].length * Settings.tileXY.x && direcc[this.direccion][0] > 0) this.jugador.x = -Settings.tileXY.x;
            if (this.jugador.x < -Settings.tileXY.x && direcc[this.direccion][0] < 0) this.jugador.x = (Laberinto.array_laberinto[0].length - 1) * Settings.tileXY.x;
        }

        // console.log(this.jugador.x, this.jugador.y);
    }

    get() {
        return this.jugador;
    }
}

