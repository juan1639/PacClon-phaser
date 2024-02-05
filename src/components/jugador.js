import { Laberinto } from "./laberinto.js";

// =======================================================================
export class Jugador {

    static XY_INI = [9 * Laberinto.tileXY[0], 4 * Laberinto.tileXY[1]];
    static VEL = 4;

    // [velX, velY, addWidth, addHeight, angle]
    static INFO_DIRECCION = {
        left: [-1, 0, 0, 0, 180],
        right: [1, 0, 1, 0, 0],
        up: [0, -1, 0, 0, 270],
        down: [0, 1, 0, 1, 90]
    };

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.jugador = this.relatedScene.physics.add.sprite(Jugador.XY_INI[0], Jugador.XY_INI[1], 'pacman');
        this.jugador.angle = 0;

        this.intentoGiro = 'right';
        this.direccion = this.intentoGiro;

        // this.jugador.setCollideWorldBounds(true);
        // this.jugador.setBounce(0.2);

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
        });

        if (this.jugador.x % Laberinto.tileXY[0] === 0 && this.jugador.y % Laberinto.tileXY[1] === 0) {
            
            const x = Math.floor(this.jugador.x / Laberinto.tileXY[0]) + direcc[this.intentoGiro][0];
            const y = Math.floor(this.jugador.y / Laberinto.tileXY[1]) + direcc[this.intentoGiro][1];
            
            if (Laberinto.array_laberinto[y][x] !== 9) {
                this.direccion = this.intentoGiro;
                this.jugador.setAngle(direcc[this.direccion][4]);
            }
        }

        const ancho = direcc[this.direccion][2] * (Laberinto.tileXY[0] - Jugador.VEL);
        const alto = direcc[this.direccion][3] * (Laberinto.tileXY[1] - Jugador.VEL);
        const offsetX = direcc[this.direccion][0] * Jugador.VEL;
        const offsetY = direcc[this.direccion][1] * Jugador.VEL;
        
        const x = Math.floor((this.jugador.x + offsetX + ancho) / Laberinto.tileXY[0]);
        const y = Math.floor((this.jugador.y + offsetY + alto) / Laberinto.tileXY[1]);

        if (Laberinto.array_laberinto[y][x] !== 9) {
            this.jugador.x += direcc[this.direccion][0] * Jugador.VEL;
            this.jugador.y += direcc[this.direccion][1] * Jugador.VEL;
        }

        // console.log(this.jugador.x, this.jugador.y);
    }

    get() {
        return this.jugador;
    }
}

