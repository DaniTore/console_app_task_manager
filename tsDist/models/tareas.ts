import Tarea from "./tarea";

const inquirer = require('inquirer');
const colors = require('colors')

class Tareas {

    _listado: any ;

    get listadoArr() {

        const listado: Tarea[]  = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)

        })

        return listado
    }

    constructor(){
        this._listado = {}

    }

    borrarTarea( id: string) {

        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    crearTarea(desc:any){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea

    }

    cargarTareas( tareas: []){

        tareas.forEach((tarea: { id: string | number; }): void => {
            this._listado[tarea.id] = tarea
        })

        this._listado
    }

    listarTareas(){
       pintar(this.listadoArr)
    }

    listaTareasPendientesOCompletadas(completadas = true) {
        let listTareasCompletadas: Tarea[] = []
        let listaTareasPendientes: Tarea[] = []

        this.listadoArr.forEach((tarea: Tarea, idx): void => {
            const {completadoFecha}: any = tarea;

            if (completadoFecha) {
                listTareasCompletadas.push(tarea)
            } else {
                listaTareasPendientes.push(tarea)
            }
        });

        if(completadas) {
            pintar(listTareasCompletadas)
        } else {
            pintar(listaTareasPendientes)
        }
    }

    toggleToComplet(ids: string[]) {
        ids.forEach((id: string) => {
            const tarea: Tarea = this._listado[id];
            if(!tarea.completadoFecha){
                tarea.completadoFecha = new Date().toISOString()
            }
        });

        this.listadoArr.forEach((tarea: Tarea) => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoFecha = null
                
            }
        });
    }
}

export = Tareas

function pintar(arrTareas: Tarea[]) {
    arrTareas.forEach((tarea: Tarea, idx: number) => {
        const index = `    ${idx + 1}. `.red;
        const { desc, completadoFecha }  = tarea;
        const estado = (completadoFecha) ? 'Completada'.green : 'Pendiente'.red;
        let fecha: string = ''
        if(completadoFecha) {
            fecha = completadoFecha.substring(0,10)
        }
        console.log(index + desc + ' - ' + estado+ ' ' + fecha);
    })
}