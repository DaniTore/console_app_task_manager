import Tarea from "./tarea";

class Tareas {

    _listado: any ;

    get listadoArr() {

        const listado: object[]  = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)

        })

        return listado
    }

    constructor(){
        this._listado = {}

    }

    public crearTarea(desc:any){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea

    }
}

export = Tareas