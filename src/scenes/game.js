
// =========================================================================================
//  P a c  C l o n
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Laberinto } from '../components/laberinto.js';
import { Puntitos, PuntitosGordos } from '../components/puntitos.js';
import { Jugador } from './../components/jugador-copia.js';
import { Marcador } from './../components/marcador.js';
import { Settings } from './settings.js';
import { BotonFullScreen } from '../components/boton-nuevapartida.js';
import { CrucetaDireccion } from '../components/crucetadireccion.js';

import {
  suma_puntos,
  textos
} from '../utils/functions.js';

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.escalaBoundsX = 1.45;
    this.escalaBoundsY = 1.6;
    this.set_pausaInicial(4300);

    this.laberinto = new Laberinto(this);
    this.puntito = new Puntitos(this);
    this.puntitogordo = new PuntitosGordos(this);
    this.jugador = new Jugador(this);
    this.marcador = new Marcador(this);

    const ancho = this.sys.game.config.width;
    const alto = this.sys.game.config.height;

    this.botonfullscreen = new BotonFullScreen(this);
    this.crucetaleft = new CrucetaDireccion(this, { id: 'cruceta-left', x: ancho * 0.4, y: alto * 0.44, ang: 0, scX: 2.5, scY: 2.1 });
    this.crucetaright = new CrucetaDireccion(this, { id: 'cruceta-right', x: 0, y: alto * 0.44, ang: 0, scX: 2.5, scY: 2.1});
    this.crucetaup = new CrucetaDireccion(this, { id: 'cruceta-left', x: ancho * 0.2, y: alto * 0.28, ang: 90, scX: 1.6, scY: 2.2 });
    this.crucetadown = new CrucetaDireccion(this, { id: 'cruceta-left', x: ancho * 0.2, y: alto * 0.56, ang: 270, scX: 2.5, scY: 2.1 });
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

    // ----------------------------------------------------------------------
    this.botonfullscreen.create();
    this.crucetaleft.create(this.jugador.get().x, this.jugador.get().y);
    this.crucetaright.create(this.jugador.get().x, this.jugador.get().y);
    this.crucetaup.create(this.jugador.get().x, this.jugador.get().y);
    this.crucetadown.create(this.jugador.get().x, this.jugador.get().y);

    // ---------------------------------------------------------------------
    this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(0, 0);

    this.physics.add.overlap(this.jugador.get(), this.puntito.get(), (jugador, puntito) => {

      suma_puntos(puntito);
      this.marcador.get().getChildren()[0].setText(this.marcador.args[0][0] + Settings.getPuntos());
      puntito.disableBody(true, true);
    }, null, this);

    // this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jug, plat) => {console.log(jug.body.touching.right);});
    /* this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jugador, laberinto) => {
      console.log(jugador.touching.up);
    }); */
  }

  // ================================================================
  update() {

    if (this.jugador.controles.shift.isDown) this.scene.start('gameover');

    if (!this.pausa_inicial.activa) this.jugador.update();

    this.marcador.update(this.jugador.get().x, this.jugador.get().y);
    this.crucetadown.update(this.jugador.get().x, this.jugador.get().y);
    this.crucetaup.update(this.jugador.get().x, this.jugador.get().y);
    this.crucetaleft.update(this.jugador.get().x, this.jugador.get().y);
    this.crucetaright.update(this.jugador.get().x, this.jugador.get().y);
  }

  // ================================================================
  set_pausaInicial(tiempo) {

    this.pausa_inicial = {
      duracion: tiempo,
      activa: true
    };

    this.txt_preparado = textos([
      this.sys.game.config.width / 2, this.sys.game.config.height / 1.7,
      ' Preparado... ', 65, 'bold', 1, 1, '#fa1', 15, true, '#ffa', 'verdana, arial, sans-serif',
      this.sys.game.config.width, this.escalaBoundsX
    ], this);

    this.txt_preparado.setDepth(5);

    this.timeline = this.add.timeline([
      {
        at: this.pausa_inicial.duracion,
        run: () => {
          this.pausa_inicial.activa = false,
          this.txt_preparado.setVisible(false);
        }
      }
    ]);

    this.timeline.play();
  }

  // ================================================================
  /* comePuntito(jugador, puntito) {

    puntito.disableBody(true, true);
  } */
}
