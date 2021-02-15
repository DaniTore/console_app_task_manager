import Tarea from "./tarea";

const inquirer = require('inquirer');
const colors = require('colors')

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

    public cargarTareas( tareas: []){

        tareas.forEach((tarea: { id: string | number; }): void => {
            this._listado[tarea.id] = tarea
        })

        this._listado
    }

    public listarTareas(){
        this.listadoArr.forEach((tarea: object, idx:number) => {
            const index = `    ${idx + 1}. `.red;
            const {desc, completadoFecha}: any = tarea;
            const estado = (completadoFecha) ? 'Completado'.green : 'Pendiente'.red
            console.log(index + desc + ' - ' + estado); 
        })

    }
}

export = Tareas