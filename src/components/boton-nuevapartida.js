import { Settings } from "../scenes/settings.js";

// ==================================================================================
export class BotonNuevaPartida {

  // --------------------------------------------------------
  constructor(scene) {
    this.relatedScene = scene;
  }

  create(siguienteScene) {

    const ancho = this.relatedScene.sys.game.config.width;
    const alto = this.relatedScene.sys.game.config.height;
    const botonCondicional = Settings.getNivel() > 1 ? 'boton-continuar' : 'boton-nueva-partida';

    this.boton = this.relatedScene.add.sprite(Math.floor(ancho / 2), Math.floor(alto / 1.5), botonCondicional).setInteractive();
    this.boton.setScale(0.6);
    this.boton.setAngle(1);
    this.boton.setTint(new Phaser.Display.Color(255, 155, 115).color);

    this.boton.on('pointerover', () => {
      // this.boton.setFrame(1);
      this.boton.setScale(0.8);
    });
    this.boton.on('pointerout', () => {
      // this.boton.setFrame(0);
      this.boton.setScale(0.6);
    });
    this.boton.on('pointerdown', () => {
      this.relatedScene.scene.start(siguienteScene);
    });

    this.relatedScene.tweens.add({
      targets: this.boton,
      angle: 359,
      ease: 'Elastic',
      yoyo: true,
      hold: 900,
      duration: 2000,
      repeat: -1
    });
  }
}

// ==================================================================================
export class BotonSettings {

  // --------------------------------------------------------
  constructor(scene) {
    this.relatedScene = scene;
  }

  create(siguienteScene) {

    const ancho = this.relatedScene.sys.game.config.width;
    const alto = this.relatedScene.sys.game.config.height;
    this.boton = this.relatedScene.add.sprite(Math.floor(ancho / 2), Math.floor(alto / 1.1), 'boton-settings').setInteractive();
    this.boton.setScale(0.5);
    this.boton.setAngle(0);
    this.boton.setTint(new Phaser.Display.Color(255, 155, 115).color);

    this.boton.on('pointerover', () => {
      // this.boton.setFrame(1);
      this.boton.setScale(0.8);
    });
    this.boton.on('pointerout', () => {
      // this.boton.setFrame(0);
      this.boton.setScale(0.5);
    });
    this.boton.on('pointerdown', () => {
      this.relatedScene.scene.start(siguienteScene);
    });

    this.relatedScene.tweens.add({
      targets: this.boton,
      y: Math.floor(alto / 1), 
      ease: 'Sine.easeIn',
      yoyo: true,
      duration: 2700,
      repeat: -1
    });
  }
}

// ==================================================================================
export class BotonFullScreen {

  // --------------------------------------------------------
  constructor(scene) {
    this.relatedScene = scene;
  }

  create() {

    const ancho = this.relatedScene.sys.game.config.width;
    const alto = this.relatedScene.sys.game.config.height;
    const escala = 0.5;
    const sizeXY = Math.floor((64 * escala) / 2);

    this.offsetX = Math.floor(ancho / 2.1);
    this.offsetY = Math.floor(alto / 2.1);

    this.boton = this.relatedScene.add.sprite(Math.floor(ancho / 1.05), sizeXY, 'boton-fullscreen').setInteractive();
    this.boton.setScale(escala).setDepth(4).setAngle(0).setFrame(0);

    this.boton.on('pointerover', () => {
      // this.boton.setFrame(1);
      this.boton.setScale(0.8);
    });
    this.boton.on('pointerout', () => {
      // this.boton.setFrame(0);
      this.boton.setScale(escala);
    });

    this.boton.on('pointerdown', () => {
      if (!this.relatedScene.scale.isFullscreen) {
        this.relatedScene.scale.startFullscreen();
      } else {
        this.relatedScene.scale.stopFullscreen();
      }
    });
  }

  update(x, y) {

    const limit_le = Math.floor(this.relatedScene.sys.game.config.width / 2);// 400
    const limit_ri = Math.floor(this.relatedScene.sys.game.config.width / 1.045);// 750
    const limit_up = Math.floor(this.relatedScene.sys.game.config.height / 2.02);// 260
    const limit_do = Math.floor(this.relatedScene.sys.game.config.height / 0.905);// 600

    if (x > limit_le && x < limit_ri) this.boton.setX(x + this.offsetX);
    if (y > limit_up && y < limit_do) this.boton.setY(y - this.offsetY);
  }
}
