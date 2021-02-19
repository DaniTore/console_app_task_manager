const { v4: uuidv4 } = require('uuid')


class Tarea {
    id = '';
    desc: string = '';
    completadoFecha: null | string = null;

    constructor( desc: string) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoFecha = null;
    }

}

export = Tarea