import { textos } from "../utils/functions.js";

// =================================================================================
export class Iniciar extends Phaser.Scene {

    static WIDTH = 800;
    static HEIGHT = 550;

    // ------------------------------------------------
    constructor() {
        super({ key: 'iniciar' });
    }

    create() {

        this.txt1 = textos([
            Math.floor(Iniciar.WIDTH / 6.2), Math.floor(Iniciar.HEIGHT / 3),
            ' Toque pantalla o haga ', 50, 500, 1, 1, '#fff', 7, true, '#ffa', 'verdana, arial, sans-serif',
            this.sys.game.config.width, 1
        ],this);

        this.txt2 = textos([
            Math.floor(Iniciar.WIDTH / 6.2), Math.floor(Iniciar.HEIGHT / 3) + 90,
            ' click para comenzar... ', 50, 500, 1, 1, '#fff', 7, true, '#ffa', 'verdana, arial, sans-serif',
            this.sys.game.config.width, 1
        ],this);
        
        this.input.on('pointerdown', () => this.scene.start('menuprincipal'));

        console.log(this);
    }
}
