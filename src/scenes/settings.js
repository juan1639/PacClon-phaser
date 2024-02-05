
// ====================================================================================
export class Settings {

    static screen = {
        width: 800,
        height: 550,
        escBoundsX: 1.45,
        escBoundsY: 1.6
    };

    static puntos = 0;
    static nivel = 1;
    static hi = 12000;
    static vidas = 3;

    static botonesYcruceta = true;

    static coorCruceta = {
        xx: 60,
        yy: 1400,
        sizeX: 2.5,
        sizeY: 2.1
    };

    static cameraControles = {
        x: 0,
        y: 370,
        ancho: 800,
        alto: 280,
        scrollX: 0,
        scrollY: 1265
    };

    static cameraScores = {
        x: 0,
        y: 0,
        ancho: 800,
        alto: 30,
        scrollX: 0,
        scrollY: -99
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

    static isBotonesYcruceta() {
        return Settings.botonesYcruceta;
    }

    static getCoorCruceta() {
        return Settings.coorCruceta;
    }

    static getScreen() {
        return Settings.screen;
    }

    static getDepth() {
        return Settings.depth;
    }

    static getCameraControles() {
        return Settings.cameraControles;
    }

    static getCameraScores() {
        return Settings.cameraScores;
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

    static setBotonesYcruceta(bool) {
        Settings.botonesYcruceta = bool;
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
