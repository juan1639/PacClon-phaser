// =========================================================================================
//  D O N K E Y - J O N  4
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Laberinto } from '../components/laberinto.js';
import { Puntitos, PuntitosGordos } from '../components/puntitos.js';
import { Jugador } from './../components/jugador-copia.js';
import { Marcador } from './../components/marcador.js';

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
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

    this.sonido_inicioNivel = this.sound.add('sonidoPacmanInicioNivel');
    this.sonido_inicioNivel.play();

    const anchoScreen = this.sys.game.config.width;
    const altoScreen = this.sys.game.config.height;

    this.add.image(anchoScreen / 2, altoScreen / 2, 'fondo');
    this.add.image(anchoScreen / 2, altoScreen / 2 + altoScreen, 'fondo');
    this.add.image(anchoScreen / 2 + anchoScreen, altoScreen / 2, 'fondo');
    this.add.image(anchoScreen / 2 + anchoScreen, altoScreen / 2 + altoScreen, 'fondo');

    this.cameras.main.setBounds(0, 0, Math.floor(800 * 1.45), Math.floor(550 * 1.6));
    this.physics.world.setBounds(0, 0, Math.floor(800 * 1.45), Math.floor(550 * 1.6));

    this.laberinto.create();
    this.puntito.create();
    this.puntitogordo.create();
    this.jugador.create();
    this.marcador.create();

    this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(0, 0);

    this.physics.add.overlap(this.jugador.get(), this.puntito.get(), (jugador, puntito) => puntito.disableBody(true, true), null, this);
    // this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jug, plat) => {console.log(jug.body.touching.right);});
    /* this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jugador, laberinto) => {
      console.log(jugador.touching.up);
    }); */
  }

  // ================================================================
  update() {

    this.jugador.update();
    this.marcador.update(this.jugador.get().x, this.jugador.get().y);
  }

  // ================================================================
  /* comePuntito(jugador, puntito) {

    puntito.disableBody(true, true);
  } */
}
