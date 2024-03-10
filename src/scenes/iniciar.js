import { textos } from "../utils/functions.js";

export class Iniciar extends Phaser.Scene
{

    constructor()
    {
        super({ key: 'iniciar' });
    }

    create()
    {
        this.txt1 = textos([
            Math.floor(this.sys.game.config.width / 6.2), Math.floor(this.sys.game.config.height / 3),
            ' Toque pantalla o haga \n click para comenzar... ', 50, 500, 1, 1, '#fff', 7, true, '#ffa',
            'verdana, arial, sans-serif', this.sys.game.config.width, 1
        ], this);
        
        this.input.on('pointerdown', () => this.scene.start('menuprincipal'));

        console.log(this);
    }
}
