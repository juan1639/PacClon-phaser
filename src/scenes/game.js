// =========================================================================================
//  D O N K E Y - J O N  4
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Laberinto } from '../components/laberinto.js';
import { Jugador } from './../components/jugador.js';

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
    // this.gameoverImage = this.add.image(400, 90, 'gameover');
    // this.gameoverImage.visible = false;
    
    // this.cameras.main.setBounds(0, 0, 800 * 2, 550);
    // this.physics.world.setBounds(0, 0, 800 * 2, 550);

    this.laberinto.create();
    this.jugador.create();

    // this.cameras.main.startFollow(this.jugador.get());
    // this.cameras.main.followOffset.set(-200, 0);

    // this.physics.add.collider(this.jugador.get(), this.plataforma.get(), this.platformaImpacto, null, this);
    // this.physics.add.collider(this.jugador.get(), this.laberinto.get(), (jug, plat) => {console.log(jug.body.touching.right);});
  }

  // ================================================================
  update() {

    this.jugador.update();
  }

  // ================================================================
  
  

  // ----------------------------------------------------------------
  
}

