import { Settings } from '../scenes/settings.js';
import { Laberinto } from "./laberinto.js";

export class Fantasma {

    static VEL = 4;

    // [velX, velY, addWidth, addHeight, angle]
    static INFO_DIRECCION = {
        left: [-1, 0, 0, 0, 180, 'left'],
        right: [1, 0, 1, 0, 0, 'right'],
        up: [0, -1, 0, 0, 270, 'up'],
        down: [0, 1, 0, 1, 90, 'down']
    };

    static OTRA_DIRECCION_RND = {
        left: ['right', 'up', 'down'],
        right: ['left', 'up', 'down'],
        up: ['right', 'left', 'down'],
        down: ['right', 'left', 'up']
    };

    // Algunos ptos del Laberinto donde los fantasmas pueden cambiar de direccion
    static ptosClave = [
        [4, 1], [14, 1],
        [4, 4], [6, 4], [12, 4], [14, 4],
        [4, 8], [6, 8], [12, 8], [14, 8],
        [1, 11], [4, 11], [6, 11], [12, 11], [14, 11], [17, 11],
        [4, 13], [6, 13], [12, 13], [14, 13]
    ];

    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.fantasmas = this.relatedScene.physics.add.group({
            key: ['fantasma0', 'fantasma1', 'fantasma2', 'fantasma3'],
            frameQuantity: 1,
            setXY: {
                x: Settings.fantasmasIniXY.azul[0] * Settings.tileXY.x,
                y: Settings.fantasmasIniXY.azul[1] * Settings.tileXY.y,
                stepX: Settings.tileXY.x * 3
            }
        });

        this.fantasmas.children.iterate((fant => {

            fant.setData('intentoGiro', 'right');
            fant.setData('direccion', 'right');
            fant.setAngle(0).setScale(0.1, 0.1).setFrame(0);
        }));

        this.fantasmas.children.iterate((fant, index) => {

            this.relatedScene.anims.create({
                key: `sabana${index}`, 
                frames: this.relatedScene.anims.generateFrameNumbers(`fantasma${index}`, {start: 0, end: 1}),
                frameRate: 8,
                yoyo: true,
                repeat: -1
            });

            fant.anims.play(`sabana${index}`, true);
        });

        console.log(this.fantasmas);
    }

    update() {

        const direcc = Fantasma.INFO_DIRECCION;

        this.fantasmas.children.iterate((fant, index) => {

            let x = 0;
            let y = 0;
            let perseguir;

            for (let i = 0; i < Fantasma.ptosClave.length; i ++) {

                let pClaveX = Fantasma.ptosClave[i][0] * Settings.tileXY.x;
                let pClaveY = Fantasma.ptosClave[i][1] * Settings.tileXY.y;

                if (fant.x == pClaveX && fant.y == pClaveY) {

                    perseguir = Phaser.Math.Between(0, 10);

                    if (perseguir < 7 + Settings.getNivel()) {
                        this.fantasma_persigue(fant);
                    }
                }
            }

            x = Math.floor(
                (fant.x + direcc[fant.getData('direccion')][0] +
                    Settings.tileXY.x * direcc[fant.getData('direccion')][2]) / Settings.tileXY.x);
            
            y = Math.floor(
                (fant.y + direcc[fant.getData('direccion')][1] +
                    Settings.tileXY.y * direcc[fant.getData('direccion')][3]) / Settings.tileXY.y);
            
            if (!(Laberinto.check_colision(x, y))) {

                fant.x += direcc[fant.getData('direccion')][0] * Fantasma.VEL;
                fant.y += direcc[fant.getData('direccion')][1] * Fantasma.VEL;

                // if (this.x > settings.constante.nro_columnas * settings.constante.bsx && this.velX > 0) this.x = -settings.constante.bsx;
                // if (this.x < -settings.constante.bsx && this.velX < 0) this.x = settings.constante.nro_columnas * settings.constante.bsx;

            } else {

                perseguir = Phaser.Math.Between(0, 10);

                if (perseguir < 5 + Settings.getNivel()) {
                    this.fantasma_persigue(fant);
                    
                } else {
                    fant.setData('direccion', this.elegir_otra_direccion(direcc, fant));
                }
            }
        });
    }

    elegir_otra_direccion(direcc, fant) {

        let actualDirecc = direcc[fant.getData('direccion')][5];
        return Fantasma.OTRA_DIRECCION_RND[actualDirecc][Math.floor(Math.random()* 3)];
    }

    fantasma_persigue(fant) {

        const hor_ver = Phaser.Math.Between(0, 10);

        if (hor_ver < 5) {

            if (fant.y < this.relatedScene.jugador.get().y) {
                fant.setData('direccion', 'down');

            } else {
                fant.setData('direccion', 'up');
            }

        } else {

            if (fant.x < this.relatedScene.jugador.get().x) {
                fant.setData('direccion', 'right');

            } else {
                fant.setData('direccion', 'left');
            }
        }
    }

    get() {
        return this.fantasmas;
    }
}