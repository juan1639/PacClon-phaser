import { Laberinto } from "./laberinto.js";

export class Jugador {

    static XY_INI = [128, 64];
    static VEL = 4;
    static INFO_DIRECCION = [
        [-1, 0, 'left', 0, 0, true],
        [1, 0, 'right', 1, 0, false],
        [0, -1, 'up', 0, 0],
        [0, 1, 'down', 0, 1]
    ];

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.jugador = this.relatedScene.physics.add.sprite(Jugador.XY_INI[0], Jugador.XY_INI[1], 'pacman');

        this.intentoGiro = 1;
        this.direccion = this.intentoGiro;

        this.jugador.setCollideWorldBounds(true);
        // this.jugador.setBounce(0.2);

        this.relatedScene.anims.create({
            key: 'left',
            frames: this.relatedScene.anims.generateFrameNumbers('pacman', {start: 0, end: 6}),
            frameRate: 30,
            yoyo: true,
            repeat: -1
        });
    
        this.relatedScene.anims.create({
            key: 'right',
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

        this.controles = this.relatedScene.input.keyboard.createCursorKeys();

        console.log(this.jugador);
    }

    update() {

        // this.direccion, this.intentoGiro = 0,1,2,3
        // 0 left, 1 right, 2 up, 3 down

        const direcc = Jugador.INFO_DIRECCION;

        direcc.forEach((tecla, index) => {
            if (this.controles[tecla[2]].isDown) this.intentoGiro = index;
        });

        if (this.jugador.x % Laberinto.tileXY[0] === 0 && this.jugador.y % Laberinto.tileXY[1] === 0) {
            
            const x = Math.floor(this.jugador.x / Laberinto.tileXY[0]) + direcc[this.intentoGiro][0];
            const y = Math.floor(this.jugador.y / Laberinto.tileXY[1]) + direcc[this.intentoGiro][1];
            
            if (Laberinto.array_laberinto[y][x] !== 9) {
                this.direccion = this.intentoGiro;
                this.jugador.setFlipX(direcc[this.direccion][5]);
            }
        }

        const ancho = direcc[this.direccion][3] * (Laberinto.tileXY[0] - Jugador.VEL);
        const alto = direcc[this.direccion][4] * (Laberinto.tileXY[1] - Jugador.VEL);
        const offsetX = direcc[this.direccion][0] * Jugador.VEL;
        const offsetY = direcc[this.direccion][1] * Jugador.VEL;
        
        const x = Math.floor((this.jugador.x + offsetX + ancho) / Laberinto.tileXY[0]);
        const y = Math.floor((this.jugador.y + offsetY + alto) / Laberinto.tileXY[1]);

        if (Laberinto.array_laberinto[y][x] !== 9) {
            this.jugador.x += direcc[this.direccion][0] * Jugador.VEL;
            this.jugador.y += direcc[this.direccion][1] * Jugador.VEL;
        }

        this.jugador.anims.play(direcc[this.direccion][2], true);

        // console.log(this.jugador.x, this.jugador.y);
    }

    get() {
        return this.jugador;
    }
}

