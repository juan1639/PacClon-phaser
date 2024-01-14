import { centrar_txt } from '../utils/functions.js';
import { Settings } from './settings.js';
import { BotonNuevaPartida } from "../components/boton-nuevapartida.js";

// =================================================================================================
export class Congratulations extends Phaser.Scene {

  constructor() {
    super({ key: 'congratulations' });
  }

  init() {
    this.botoninicio = new BotonNuevaPartida(this);
  }

  create() {

    const aparecerBoton = 3200;
    this.incremento_nivel = Settings.getNivel() + 1;
    this.sonidoLevelUp = this.sound.add('sonidoLevelUp');
    this.sonidoMusicaFondo = this.sound.add('sonidoMusicaFondo');
    
    this.size = 80;
    this.left = Math.floor(this.sys.game.config.width / 5.2);
    this.top = Math.floor(this.sys.game.config.height / 3);
    
    this.txt_titulo = this.add.text(this.left, this.top, ' Nivel Superado! ', {
        fontSize: this.size + 'px',
        fontStyle: 'bold',
        shadow: {
            offsetX: 1,
            offsetY: 1,
            color: '#fa1',
            blur: 15,
            fill: true
        },
        fill: '#fd2',
        fontFamily: 'verdana, arial, sans-serif'
    });

    this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width));

    this.timeline = this.add.timeline([
        {
          at: aparecerBoton,
          run: () => {
            Settings.setNivel(this.incremento_nivel);
            this.botoninicio.create('prenivel');
          }
        }
    ]);
    
    this.timeline.play();

    console.log(this.txt_titulo);
  }

  update() {

  }
}
