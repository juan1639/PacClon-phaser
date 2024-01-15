
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
        this.boton.setX(x -this.direccion.x).setY(y + this.direccion.y);

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

        this.boton.setX(x - this.direccion.x);
        this.boton.setY(y + this.direccion.y);

        /* if (this.boton.x < this.direccion.x -100) this.boton.setX(this.direccion.x - 100);
        if (this.boton.x > this.direccion.x + 200) this.boton.setX(this.direccion.x + 200);
        if (this.boton.y < this.direccion.y - 100) this.boton.setY(this.direccion.y - 100);
        if (this.boton.y > this.direccion.y + 200) this.boton.setY(this.direccion.y + 200); */
    }
}

