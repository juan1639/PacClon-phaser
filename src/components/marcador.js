import { Settings } from '../scenes/settings.js';

// ===========================================================================
export class Marcador {

    static LIMIT_X = 360;
    static LIMIT_Y = 328;

    // -------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        /* this.size = 24;

        this.left = Math.floor(this.relatedScene.sys.game.config.width / 2);
        this.top = Math.floor(this.relatedScene.sys.game.config.height / 2);
        
        this.marcador = this.relatedScene.add.text(0, 0, ' Puntos: 0', {
            fontSize: this.size + 'px', fill: '#fff', fontFamily: 'verdana, arial, sans-serif'
        }); */

        this.marcadores = this.relatedScene.add.group();

        this.left = Math.floor(this.relatedScene.sys.game.config.width / 2);
        this.top = Math.floor(this.relatedScene.sys.game.config.height / 2);
        this.ancho = this.relatedScene.sys.game.config.width;
        this.alto = this.relatedScene.sys.game.config.height;

        this.args = [
            [ ' Puntos: ', 20, '#fff', '#2ef', 7, 0, 0, Settings.getPuntos() ],
            [ ' Nivel: ', 20, '#fff', '#2ef', 7, Math.floor(this.ancho / 2), 0, Settings.getNivel() ],
            [ ' Record: ', 20, '#fff', '#2ef', 7, Math.floor(this.ancho / 1.4), 0, Settings.getRecord() ]
        ];

        this.args.forEach((arg, index) => {

            let cadaMarcador = this.relatedScene.add.text(arg[5], arg[6], arg[0] + arg[7], {
                fontSize: arg[1] + 'px',
                fill: arg[2],
                fontFamily: 'verdana, arial, sans-serif',
                shadow: {
                    offsetX: 1,
                    offsetY: 1,
                    color: arg[3],
                    blur: arg[4],
                    fill: true
                }
            });

            this.marcadores.add(cadaMarcador);
        });

        console.log(this.marcadores);
    }

    update(x, y) {

        this.marcadores.getChildren().forEach((marcador, index) => {

            marcador.setX(x + this.args[index][5] - this.left);
            marcador.setY(y + this.args[index][6] - this.top);

            if (marcador.x < 0 + this.args[index][5]) marcador.setX(0 + this.args[index][5]);
            if (marcador.x > Marcador.LIMIT_X + this.args[index][5]) marcador.setX(Marcador.LIMIT_X + this.args[index][5]);
            if (marcador.y < 0 + this.args[index][6]) marcador.setY(0 + this.args[index][6]);
            if (marcador.y > Marcador.LIMIT_Y + this.args[index][6]) marcador.setY(Marcador.LIMIT_Y + this.args[index][6]);
        });
    }

    get() {
        return this.marcadores;
    }
}
