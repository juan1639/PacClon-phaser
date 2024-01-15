import { Settings } from "../scenes/settings.js";

// =================================================================================
function centrar_txt(texto, anchoScreen) {
  
    console.log(texto.width);
    return Math.floor(anchoScreen / 2 - texto.width / 2);
}

// =================================================================================
function suma_puntos(puntos) {

    const bonus = Settings.getPuntos() + puntos.getData('puntos');
    Settings.setPuntos(bonus);
    console.log(bonus, Settings.getPuntos());
}

// =================================================================================
function restar_vida() {
    
    const actualizar = Settings.getVidas() - 1;
    Settings.setVidas(actualizar);
}

// =================================================================================
function textos(args, relatedScene) {

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
        fontFamily: args[11]
    });

    txt.setX(centrar_txt(txt, args[12] * args[13]));
    // this.txt_titulo.setX(centrar_txt(this.txt_titulo, this.sys.game.config.width));

    return txt;
}

export {
    centrar_txt,
    suma_puntos,
    restar_vida,
    textos
};
