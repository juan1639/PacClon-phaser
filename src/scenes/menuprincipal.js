import { JugadorPreGame } from '../components/jugador.js';
import { FantasmaPreGame } from '../components/fantasma.js';
import { loader } from './loader.js';
import { Settings } from './settings.js';
import { BotonNuevaPartida, BotonSettings } from "../components/boton-nuevapartida.js";

import {
    centrar_txt,
    textos,
    elastic,
    particulas
} from '../utils/functions.js';

export class MenuPrincipal extends Phaser.Scene
{
    constructor()
    {
        super({ key: 'menuprincipal' });
    }

    init()
    {
        Settings.setPuntos(0);
        Settings.setNivel(1);
        Settings.setVidas(3);
        Settings.setGameOver(false);
        Settings.setFantasmasScary(false);
        Settings.setBotonesYcruceta(false);
        Settings.setFantasmasBonusInc(0);

        this.botoninicio = new BotonNuevaPartida(this);
        this.botonsettings = new BotonSettings(this);

        this.jugador = new JugadorPreGame(this);
        this.fantasmaspregame = new FantasmaPreGame(this);
    } 

    preload()
    {
        const widthScreen = this.sys.game.config.width;
        const heightScreen = this.sys.game.config.height;

        const txt = this.add.text(Math.floor(widthScreen / 2), Math.floor(heightScreen / 4), ' Cargando...', {
            fontSize: '50px',
            fill: '#ffa',
            fontFamily: 'verdana, arial, sans-serif'
        });

        txt.setOrigin(0.5, 0);

        this.add.rectangle(
            Math.floor(widthScreen / 2), Math.floor(heightScreen / 2),
            Math.floor(widthScreen / 1.5), Math.floor(heightScreen / 12)
        ).setStrokeStyle(1, 0xffee88);

        const bar = this.add.rectangle(
            Math.floor(widthScreen / 2) - Math.floor(widthScreen / 3) + 4,
            Math.floor(heightScreen / 2),
            4,
            Math.floor(heightScreen / 14),
            0xff9911
        );

        this.load.on('progress', (progress) => {
            bar.width = (Math.floor(widthScreen / 1.55) * progress);
        });

        loader(this);
    }
    
    create()
    {
        const aparecerBoton = 4000;
        this.sonido_intermision = this.sound.add('sonidoPacmanIntermision');

        this.add.image(0, 0, 'fondo').setOrigin(0, 0);
        this.jugador.create(Settings.pacmanPregame.iniX * Settings.tileXY.x, Settings.pacmanPregame.iniY * Settings.tileXY.y);
        this.fantasmaspregame.create();

        const coorXY = [
            Math.floor(this.sys.game.config.width / 5.2),
            Math.floor(this.sys.game.config.height / 20),
            Math.floor(this.sys.game.config.height / 4)
        ];

        this.txt1 = textos([
            coorXY[0], coorXY[1],
            ' Pac Clon ', 99, 'bold', 1, 1, '#fa1', 15, true, '#dd9', 'verdana, arial, sans-serif',
            this.sys.game.config.width, 1
        ], this);

        this.txt1.setStroke('#ea1', 16).setShadow(2, 2, '#111111', 2, false, true);

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
