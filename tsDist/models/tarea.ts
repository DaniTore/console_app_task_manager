import { Module } from "module";

class Tarea {
    id = '';
    desc: string = '';
    completado = null;

    constructor( desc: string) {
        this.desc = desc
    }

}

module.exports = Tarea