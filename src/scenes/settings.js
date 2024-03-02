
export class Settings {

    static screen = {
        width: 800,
        height: 550,
        escBoundsX: 1.45,
        escBoundsY: 1.6
    };

    static tileXY = {
        x: 64,
        y: 64
    };

    static puntos = 0;
    static nivel = 1;
    static hi = 12000;
    static vidas = 3;

    static pacman = {
        iniX: 9,
        iniY: 4,
        vel: 4
    };

    static fantasmasIniXY = {
        azul: [4, 8],
        rojo: [8, 8],
        verde: [12, 8],
        pink: [16, 8],
    };

    static botonesYcruceta = false;

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

    static array_laberinto = [
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,5,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,5,9],
        [9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],
    
        [9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],
        [9,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,9],
        [9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],
    
        [9,1,1,1,1,9,1,1,1,9,1,1,1,9,1,1,1,1,9],
        [9,9,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,9,9],
        [9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],
    
        [9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],
        [9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],
        [0,1,1,1,1,9,1,1,1,1,1,1,1,9,1,1,1,1,0],
    
        [9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],
        [9,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    ];

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
