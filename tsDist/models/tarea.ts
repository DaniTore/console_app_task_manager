const { v4: uuidv4 } = require('uuid')


class Tarea {
    id:string = '';
    desc: string = '';
    completadoFecha = null;

    constructor( desc: string) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoFecha = null;
    }

}

export = Tarea