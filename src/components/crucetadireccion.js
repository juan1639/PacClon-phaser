
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
        const ancho = CrucetaDireccion.WIDTH;
        const alto = CrucetaDireccion.HEIGHT;
        this.boton = this.relatedScene.add.image(this.direccion.x, alto - this.direccion.y, this.direccion.id).setInteractive();
        this.boton.setScale(2.5, 2.1).setAngle(this.direccion.ang).setDepth(4);
        this.isDown = false;
    
        this.boton.on('pointerover', () => {
          this.boton.setScale(2.6, 2.2);
        });

        this.boton.on('pointerout', () => {
          this.boton.setScale(2.5, 2.1);
        });

        this.boton.on('pointerdown', () => {
            this.isDown = true;
            
        });

        this.boton.on('pointerup', () => {
            this.isDown = false;
        });
    }
}

