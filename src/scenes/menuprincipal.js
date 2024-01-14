import { loader } from './loader.js';
import { centrar_txt } from '../utils/functions.js';
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

        this.size = 99;
        this.left = Math.floor(this.sys.game.config.width / 5.2);
        this.top = Math.floor(this.sys.game.config.height / 3);
        
        this.txt_titulo = this.add.text(this.left, this.top, ' Pac Clon ', {
            fontSize: this.size + 'px',
            fontStyle: 'bold',
            shadow: {
                offsetX: 1,
                offsetY: 1,
                color: '#fa1',
                blur: 15,
                fill: true
            },
            fill: '#ffa',
            fontFamily: 'verdana, arial, sans-serif'
        });

        this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width));

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

        console.log(this.txt_titulo);
    }

    update() {

    }
}
