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

export {
    centrar_txt,
    suma_puntos,
    restar_vida
};
