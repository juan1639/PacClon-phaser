import { Settings } from "../scenes/settings.js";

function centrar_txt(texto, anchoScreen) {
  
    console.log(texto.width);
    return Math.floor(anchoScreen / 2 - texto.width / 2);
}

// =================================================================================
function elastic(texto, down, dura, scene) {

    scene.tweens.add({
        targets: texto,
        y: down,
        ease: 'Elastic',
        duration: dura
    });
}

// =================================================================================
function particulas(x, y, particula, vel, span, size, color, sprite, bool, scene) {

    const partis = scene.add.particles(x, y, particula, {
        speed: vel,
        lifespan: span,
        scale: size,
        tint: color,
        // gravityY: 200
        blendMode: 'ADD'
    });

    if (bool) partis.startFollow(sprite);
}

// =================================================================================
function suma_puntos(puntos) {

    const bonus = Settings.getPuntos() + puntos.getData('puntos');
    Settings.setPuntos(bonus);
    // console.log(bonus, Settings.getPuntos());
}

// =================================================================================
function restar_vida() {
    
    const actualizar = Settings.getVidas() - 1;
    Settings.setVidas(actualizar);
}

// =================================================================================
function textos(args, relatedScene) {

    const excepciones = Settings.getBonusCerezas().concat(Settings.getFantasmasBonusInc().puntos);
    const excepcionesString = excepciones.map(excepcion => excepcion.toString());
    excepcionesString.push(' Enhorabuena! ');
    console.log(excepcionesString);

    const left = Math.floor(args[0]);
    const top = Math.floor(args[1]);
    
    const txt = relatedScene.add.text(left, top, args[2], {
        fontSize: args[3] + 'px',
        fontStyle: args[4],
        shadow: {
            offsetX: args[5],
            offsetY: args[6],
            color: args[7],
            blur: args[8],
            fill: args[9]
        },
        fill: args[10],
        fontFamily: args[11],
    });

    if (!excepcionesString.includes(args[2])) txt.setX(centrar_txt(txt, args[12] * args[13]));
    // this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width));

    if (excepcionesString.includes(args[2]) && args[2] !== ' Enhorabuena! ') {
        relatedScene.tweens.add({
            targets: txt,
            alpha: 0,
            ease: 'Sine.easeInOut',
            duration: Settings.getFantasmasBonusInc().duracion
        });
    }

    return txt;
}

// =================================================================================
function play_sonidos(id, boolLoop, volumen) {
    
    id.play();
    id.loop = boolLoop;
    id.volume = volumen;
}

export {
    centrar_txt,
    elastic,
    particulas,
    suma_puntos,
    restar_vida,
    textos,
    play_sonidos
};
