import { Marcador } from '../components/marcador.js';
import { BotonNuevaPartida } from "../components/boton-nuevapartida.js";
import { textos } from '../utils/functions.js';
import { Settings } from './settings.js';

// ==========================================================================
export class GameOver extends Phaser.Scene {

  constructor() {

    super({ key: 'gameover' });
    this.marcador = new Marcador(this);
    this.botonrejugar = new BotonNuevaPartida(this);
  }
  
  create() {

    this.sonidoGameOver = this.sound.add('sonidoGameOverRetro');

    this.add.image(0, 0, 'fondo').setOrigin(0, 0);
    this.marcador.create();

    const duracionThisScene = 7000;

    this.txt1 = textos([
      Math.floor(this.sys.game.config.width / 2), Math.floor(this.sys.game.config.height / 3),
      ' Game Over ', 90, 'bold', 1, 1, '#f91', 15, true, '#fb2', 'verdana, arial, sans-serif',
      this.sys.game.config.width, 1
    ],this);

    this.txt1.setAlpha(0);

    this.tweens.add({
      targets: this.txt1,
      alpha: 1,
      duration: Math.floor(duracionThisScene / 2),
      // repeat: 1
    });

    this.timeline = this.add.timeline([
      {
        at: duracionThisScene,
        run: () => {
          this.botonrejugar.create('menuprincipal');
        }
      }
    ]);

    this.timeline.play();
    this.sonidoGameOver.play();
    this.sonidoGameOver.volume = 0.5;

    this.check_newRecord();
  }

  update() {

  }

  check_newRecord() {

    if (Settings.getPuntos() >= Settings.getRecord()) {

      Settings.setRecord(Settings.getPuntos());

      this.txt_newRecord = textos([
        Math.floor(this.sys.game.config.width / 2), Math.floor(this.sys.game.config.height / 4.5),
        '  Enhorabuena! Nuevo Record! ', 40, 'bold', 1, 1, '#fff', 7, true, '#ff9', 'verdana, arial, sans-serif',
        this.sys.game.config.width, 1
      ],this);
      
      this.tweens.add({
        targets: this.txt_newRecord,
        scale: 2.1,
        ease: 'sine.out',
        duration: 1000,
        yoyo: true,
        delay: 500,
        repeat: -1,
        repeatDelay: 3000
      });
    } 
  }
}
