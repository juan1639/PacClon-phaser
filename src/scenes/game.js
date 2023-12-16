// =========================================================================================
//  D O N K E Y - J O N  4
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Laberinto } from '../components/laberinto.js';
import { Jugador } from './../components/jugador-copia.js';

const WIDTH = 800;
const HEIGHT = 550;

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.laberinto = new Laberinto(this);
    this.jugador = new Jugador(this);
  }

  preload() {
    loader(this);
  }

  create() {

    this.add.image(WIDTH / 2, HEIGHT / 2, 'fondo');
    this.add.image(WIDTH / 2, HEIGHT / 2 + HEIGHT, 'fondo');
    this.add.image(WIDTH / 2 + WIDTH, HEIGHT / 2, 'fondo');
    this.add.image(WIDTH / 2 + WIDTH, HEIGHT / 2 + HEIGHT, 'fondo');
    // this.gameoverImage = this.add.image(400, 90, 'gameover');
    // this.gameoverImage.visible = false;
    
    this.cameras.main.setBounds(0, 0, Math.floor(800 * 1.45), Math.floor(550 * 1.6));
    this.physics.world.setBounds(0, 0, Math.floor(800 * 1.45), Math.floor(550 * 1.6));

    this.laberinto.create();
    this.jugador.create();

    this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(0, 0);

    // this.physics.add.collider(this.jugador.get(), this.plataforma.get(), this.platformaImpacto, null, this);
    // this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jug, plat) => {console.log(jug.body.touching.right);});
    /* this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jugador, laberinto) => {
      console.log(jugador.touching.up);
    }); */
  }

  // ================================================================
  update() {

    this.jugador.update();
  }

  // ================================================================
}
