export function loader(scene) {

  scene.load.image('fondo', './src/img/fondo_pacmanPh.png');
  scene.load.image('gameover', './src/img/gameover.png');
  scene.load.image('tile', './src/img/tile_pacmanMarron.png');
  scene.load.image('puntito', './src/img/puntito.png');
  scene.load.spritesheet('pacman', './src/img/pac-animasPh.png', {frameWidth: 64, frameHeight: 64});
}
