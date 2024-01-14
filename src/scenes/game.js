
// =========================================================================================
//  P a c  C l o n
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Laberinto } from '../components/laberinto.js';
import { Puntitos, PuntitosGordos } from '../components/puntitos.js';
import { Jugador } from './../components/jugador-copia.js';
import { Marcador } from './../components/marcador.js';

import {
  suma_puntos,
  centrar_txt
} from '../utils/functions.js';

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.escalaBoundsX = 1.45;
    this.escalaBoundsY = 1.6;
    this.set_pausaInicial(4200);

    this.laberinto = new Laberinto(this);
    this.puntito = new Puntitos(this);
    this.puntitogordo = new PuntitosGordos(this);
    this.jugador = new Jugador(this);
    this.marcador = new Marcador(this);
  }

  preload() {
    loader(this);
  }

  create() {

    this.sonido_preparado = this.sound.add('sonidoPacmanInicioNivel');
    this.sonido_preparado.play();
    this.sonido_preparado.volume = 0.8;

    // -----------------------------------------------------------------------
    const anchoScreen = this.sys.game.config.width;
    const altoScreen = this.sys.game.config.height;
    this.add.image(anchoScreen / 2, altoScreen / 2, 'fondo');
    this.add.image(anchoScreen / 2, altoScreen / 2 + altoScreen, 'fondo');
    this.add.image(anchoScreen / 2 + anchoScreen, altoScreen / 2, 'fondo');
    this.add.image(anchoScreen / 2 + anchoScreen, altoScreen / 2 + altoScreen, 'fondo');

    // -----------------------------------------------------------------------
    this.cameras.main.setBounds(
      0, 0, Math.floor(this.sys.game.config.width * this.escalaBoundsX),
      Math.floor(this.sys.game.config.height * this.escalaBoundsY)
    );

    this.physics.world.setBounds(
      0, 0, Math.floor(this.sys.game.config.width * this.escalaBoundsX),
      Math.floor(this.sys.game.config.height * this.escalaBoundsY)
    );

    // ----------------------------------------------------------------------
    this.laberinto.create();
    this.puntito.create();
    this.puntitogordo.create();
    this.jugador.create();
    this.marcador.create();

    // ---------------------------------------------------------------------
    this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(0, 0);

    this.physics.add.overlap(this.jugador.get(), this.puntito.get(), (jugador, puntito) => {
      suma_puntos(puntito);
      puntito.disableBody(true, true);
    }, null, this);

    // this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jug, plat) => {console.log(jug.body.touching.right);});
    /* this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jugador, laberinto) => {
      console.log(jugador.touching.up);
    }); */
  }

  // ================================================================
  update() {

    if (!this.pausa_inicial.activa) this.jugador.update();
    this.marcador.update(this.jugador.get().x, this.jugador.get().y);
  }

  // ================================================================
  set_pausaInicial(tiempo) {

    this.pausa_inicial = {
      duracion: tiempo,
      activa: true
    };

    this.timeline = this.add.timeline([
      {
        at: this.pausa_inicial.duracion,
        run: () => {
          this.pausa_inicial.activa = false
        }
      }
    ]);

    this.timeline.play();

    const left = Math.floor(this.sys.game.config.width / 2);
    const top = Math.floor(this.sys.game.config.height / 1.7);
    
    this.txt_titulo = this.add.text(left, top, ' Preparado... ', {
        fontSize: '65px',
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

    this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width * this.escalaBoundsX));
    // this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width));
    this.txt_titulo.setDepth(2);
  }

  // ================================================================
  /* comePuntito(jugador, puntito) {

    puntito.disableBody(true, true);
  } */
}
