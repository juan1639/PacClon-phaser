
// ==================================================================================
export class CrucetaDireccion {

    static WIDTH = 800;
    static HEIGHT = 550;

    // --------------------------------------------------------
    constructor(scene, direccion) {
        this.relatedScene = scene;
        this.direccion = direccion;
    }

    create(x, y) {

        const ancho = CrucetaDireccion.WIDTH;
        const alto = CrucetaDireccion.HEIGHT;
        this.left = Math.floor(this.relatedScene.sys.game.config.width / 2);
        this.top = Math.floor(this.relatedScene.sys.game.config.height / 2);

        this.boton = this.relatedScene.add.image(x - this.direccion.x, y + this.direccion.y, this.direccion.id).setInteractive();
        this.boton.setScale(this.direccion.scX, this.direccion.scY).setAngle(this.direccion.ang).setDepth(4);
        this.boton.setX(x - this.direccion.x).setY(y + this.direccion.y);

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
    }

    update(x, y) {

        if (x > 400 && x < 750) this.boton.setX(x - this.direccion.x);
        if (y > 260 && y < 600) this.boton.setY(y + this.direccion.y);
    }
}
