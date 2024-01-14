export function loader(scene) {

  scene.load.image('fondo', './src/img/fondo_pacmanPh.png');
  scene.load.image('tile', './src/img/tile_pacmanMarron.png');
  scene.load.image('puntito', './src/img/puntito.png');

  scene.load.spritesheet('pacman', './src/img/pac-animasPh.png', {frameWidth: 64, frameHeight: 64});

  scene.load.image('boton-continuar', './src/img/boton-continuar.png');
  scene.load.image('boton-nueva-partida', './src/img/boton-start.png');
  scene.load.image('boton-settings', './src/img/boton-config.png');
  // scene.load.image('gameover', './src/img/gameover.png');

  // ---------------------------------------------------------------------------
  //  AUDIO
  // ---------------------------------------------------------------------------
  scene.load.audio('sonidoGameOverRetro', './src/audio/gameoveretro.ogg');
  scene.load.audio('sonidoPacmanAzules', './src/audio/pacmanazules.ogg');
  scene.load.audio('sonidoPacmanDies', './src/audio/pacmandies.ogg');
  scene.load.audio('sonidoPacmanEatingCherry', './src/audio/pacmaneatingcherry.mp3');
  scene.load.audio('sonidoPacmanEatingGhost', './src/audio/pacmaneatinghost.ogg');
  scene.load.audio('sonidoPacmanInicioNivel', './src/audio/pacmaninicionivel.ogg');
  scene.load.audio('sonidoPacmanIntermision', './src/audio/pacmanintermision.ogg');
  scene.load.audio('sonidoPacmanSirena', './src/audio/pacmansirena.ogg');
  scene.load.audio('sonidoWakaWaka', './src/audio/pacmanwakawaka.mp3');
}
