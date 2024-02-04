// ====================================================================================
export class Settings {

    static puntos = 0;
    static nivel = 1;
    static hi = 12000;
    static vidas = 3;

    static screen = {
        width: 800,
        height: 600,
        escBoundsX: 1.45,
        escBoundsY: 1.6
    };

    static depth = {
        fondo: 0,
        puntitos: 10,
        pared: 20,
        item: 30,
        jugador: 40,
        fantasmas: 50,
        textos: 60
    };

    // ------------------------------------------------------
    static getPuntos() {
        return Settings.puntos;
    }

    static getNivel() {
        return Settings.nivel;
    }

    static getRecord() {
        return Settings.hi;
    }

    static getVidas() {
        return Settings.vidas;
    }

    static getScreen() {
        return Settings.screen;
    }

    static getDepth() {
        return Settings.depth;
    }

    // ------------------------------------------------------
    static setPuntos(ptos) {
        Settings.puntos = ptos;
    }

    static setNivel(level) {
        Settings.nivel = level;
    }

    static setRecord(hiScore) {
        Settings.hi = hiScore;
    }

    static setVidas(lifes) {
        Settings.vidas = lifes;
    }

    static setScreen(w, h, bx, by) {
        Settings.screen.width = w;
        Settings.screen.height = h;
        Settings.screen.escBoundsX = bx;
        Settings.screen.escBoundsY = by;
    }

    static setDepth(fondo, puntitos, pared, item, jugador, fantasmas, textos) {
        
        Settings.depth.fondo = fondo;
        Settings.depth.puntitos = puntitos;
        Settings.depth.pared = pared;
        Settings.depth.item = item;
        Settings.depth.jugador = jugador;
        Settings.depth.fantasmas = fantasmas;
        Settings.depth.textos = textos;
    }
}
