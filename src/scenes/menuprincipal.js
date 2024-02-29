import { loader } from './loader.js';
import { Settings } from './settings.js';
import { BotonNuevaPartida, BotonSettings } from "../components/boton-nuevapartida.js";

import {
    centrar_txt,
    textos,
    elastic,
    particulas
} from '../utils/functions.js';

export class MenuPrincipal extends Phaser.Scene {

    constructor() {
        super({ key: 'menuprincipal' });
    }

    init() {
        Settings.setPuntos(0);
        Settings.setNivel(1);
        Settings.setVidas(3);

        this.botoninicio = new BotonNuevaPartida(this);
        this.botonsettings = new BotonSettings(this);
    } 

    preload() {

        const txt = this.add.text(Math.floor(this.sys.game.config.width / 2), Math.floor(this.sys.game.config.height / 2), ' Cargando...', {
            fontSize: '50px',
            fill: '#ffa',
            fontFamily: 'verdana, arial, sans-serif'
        });

        txt.setX(centrar_txt(txt, this.sys.game.config.width));

        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffff00);

        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });

        loader(this);
    }
    
    create() {

        const aparecerBoton = 4000;
        this.sonido_intermision = this.sound.add('sonidoPacmanIntermision');

        this.add.image(0, 0, 'fondo').setOrigin(0, 0);

        const coorXY = [
            Math.floor(this.sys.game.config.width / 5.2),
            Math.floor(this.sys.game.config.height / 20),
            Math.floor(this.sys.game.config.height / 4)
        ];

        this.txt1 = textos([
            coorXY[0], coorXY[1],
            ' Pac Clon ', 99, 'bold', 1, 1, '#fa1', 15, true, '#ffa', 'verdana, arial, sans-serif',
            this.sys.game.config.width, 1
        ], this);

        elastic(this.txt1, coorXY[2], 2500, this);

        this.timeline = this.add.timeline([
            {
              at: aparecerBoton,
              run: () => {
                this.botoninicio.create('game');
                this.botonsettings.create('game');

                particulas(
                    coorXY[0] + this.txt1.width / 2, coorXY[2] + 50,
                    'sparkle',
                    {min: 60, max: 120},
                    {min: 2500, max: 3000},
                    {start: 0.2, end: 0},
                    0xffcc11,
                    null, false, this
                );
              }
            }
        ]);
        
        this.timeline.play();

        this.sonido_intermision.play();
        this.sonido_intermision.volume = 0.5;

        console.log(this.txt1);
    }

    update() {}
}
