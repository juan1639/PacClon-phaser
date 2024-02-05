import { Settings } from "../scenes/settings.js";

// ==================================================================================
export class CrucetaDireccion {

    static WIDTH = 800;
    static HEIGHT = 550;

    // --------------------------------------------------------
    constructor(scene, direccion) {
        this.relatedScene = scene;
        this.direccion = direccion;
    }

    create() {

        if (!Settings.isBotonesYcruceta()) return;

        this.boton = this.relatedScene.add.image(this.direccion.x, this.direccion.y, this.direccion.id).setInteractive();
        this.boton.setScale(this.direccion.scX, this.direccion.scY).setAngle(this.direccion.ang).setDepth(4);
        this.boton.setX(this.direccion.x).setY(this.direccion.y);
        this.boton.setData('on', true);

        this.isDown = false;
    
        this.boton.on('pointerover', () => {
          this.boton.setScale(this.direccion.scX + 0.1, this.direccion.scY + 0.1);
        });

        this.boton.on('pointerout', () => {
          this.boton.setScale(this.direccion.scX, this.direccion.scY);
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
