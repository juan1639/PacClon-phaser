import { loader } from './loader.js';
import { centrar_txt } from '../utils/functions.js';
import { textos } from '../utils/functions.js';
import { Settings } from './settings.js';
import { BotonNuevaPartida, BotonSettings } from "../components/boton-nuevapartida.js";

// =================================================================================
export class MenuPrincipal extends Phaser.Scene {

    // -------------------------------------------------
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

        loader(this);
    }
    
    create() {

        const aparecerBoton = 4000;
        this.sonido_intermision = this.sound.add('sonidoPacmanIntermision');

        this.add.image(0, 0, 'fondo').setOrigin(0, 0);

        this.txt1 = textos([
            Math.floor(this.sys.game.config.width / 5.2), Math.floor(this.sys.game.config.height / 3),
            ' Pac Clon ', 99, 'bold', 1, 1, '#fa1', 15, true, '#ffa', 'verdana, arial, sans-serif',
            this.sys.game.config.width, 1
        ],this);
        
        this.timeline = this.add.timeline([
            {
              at: aparecerBoton,
              run: () => {
                this.botoninicio.create('game');
                this.botonsettings.create('game');
              }
            }
        ]);
        
        this.timeline.play();

        this.sonido_intermision.play();
        this.sonido_intermision.volume = 0.5;

        console.log(this.txt1);
    }

    update() {

    }
}
