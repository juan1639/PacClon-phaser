import { Settings } from "../scenes/settings.js";

export class CrucetaDireccion {

    constructor(scene, direccion) {
        this.relatedScene = scene;
        this.direccion = direccion;
    }

    create() {

        const { id, press, x, y, ang, scX, scY } = this.direccion;

        this.boton = this.relatedScene.add.image(x, y, id).setInteractive();
        this.boton.setScale(scX, scY).setAngle(ang).setDepth(4);
        this.boton.setX(x).setY(y);
        this.boton.setData('on', true);
        this.boton.setData('press', press);
        
        if (!Settings.isBotonesYcruceta()) this.boton.setVisible(false);

        this.isDown = false;
    
        this.boton.on('pointerover', () => {
          this.boton.setScale(scX + 0.1, scY + 0.1);
        });

        this.boton.on('pointerout', () => {
          this.boton.setScale(scX, scY);
        });

        this.boton.on('pointerdown', () => {
            this.isDown = true;
        });

        this.boton.on('pointerup', () => {
            this.isDown = false;
        });

        console.log(this.boton);
    }
    
    get() {
        return this.boton;
    }
}

// ======================================================================================
export class IconoGamePad {

    constructor(scene, direccion) {
        this.relatedScene = scene;
        this.direccion = direccion;
    }

    create() {

        this.iconogamepad = this.relatedScene.add.image(this.direccion.x, this.direccion.y, this.direccion.id).setInteractive();
        this.iconogamepad.setScale(this.direccion.scX, this.direccion.scY).setAngle(this.direccion.ang);
        this.iconogamepad.setDepth(4).setBlendMode(Phaser.BlendModes.ADD);
        this.iconogamepad.setX(this.direccion.x).setY(this.direccion.y);
        this.iconogamepad.setData('on', true);

        if (Settings.isBotonesYcruceta()) this.iconogamepad.setVisible(false);

        this.isDown = false;
    
        this.iconogamepad.on('pointerover', () => {
          this.iconogamepad.setScale(this.direccion.scX + 0.4, this.direccion.scY + 0.4);
        });

        this.iconogamepad.on('pointerout', () => {
          this.iconogamepad.setScale(this.direccion.scX, this.direccion.scY);
        });

        this.iconogamepad.on('pointerdown', () => {
            this.isDown = true;            
        });

        this.iconogamepad.on('pointerup', () => {
            this.isDown = false;
        });

        console.log(this.iconogamepad);
    }
    
    get() {
        return this.iconogamepad;
    }
}

