import { Game } from './scenes/game.js';
import { Iniciar } from './scenes/iniciar.js';
import { MenuPrincipal } from './scenes/menuprincipal.js';
import { Congratulations } from './scenes/congratulations.js';
import { GameOver } from './scenes/gameover.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 550,
  scene: [Iniciar, MenuPrincipal, Game, Congratulations, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // audio: {
  //   disableWebAudio: true
  // }
}

var game = new Phaser.Game(config);
