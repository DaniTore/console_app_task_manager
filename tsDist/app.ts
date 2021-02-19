import Tareas from "./models/tareas";

const colors = require('colors')

const  {inquireMenu, 
        pausa, 
        leerInput, 
        listarTareasBorrar,
        confirmar,
        mostrarCheckList
        }  = require('./helpers/inquirer');
const {saveIntoDB, readDB} = require('./helpers/crudDB')

const dbPath = __dirname + '/db/data.json'

const main = async() => {
    let opt = '';
    const tareas = new Tareas()

    // lee archivo data.json
    const dbTask = readDB(dbPath) 

    // carga las tareas en memoria
    if (dbTask) {
        tareas.cargarTareas(dbTask)
    }

    do {
        // Imprimir el menu
        opt = await inquireMenu();  

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                console.log('--> TAREA CREADA'.blue);
            break;
        
            case '2':
            tareas.listarTareas()
            break;

            case '3':
            tareas.listaTareasPendientesOCompletadas()
            break;

            case '4':
            const completada = false 
            tareas.listaTareasPendientesOCompletadas(completada)
            break;

            case '5': // Completado | Pendiente
            const ids = await mostrarCheckList( tareas.listadoArr);
            tareas.toggleToComplet( ids );
            console.log('--> TAREA(s) COMPLETADA(s)'.green);
            break;
            
            case '6': 
            const id = await listarTareasBorrar(tareas.listadoArr);
            if(id !== '0'){
                const confirmDelete = await confirmar('¿Esta seguro?')
                if(confirmDelete) {
                    tareas.borrarTarea(id)
                    console.log('--> TAREA BORRADA!'.red);
                }
            }
            // console.log({id});
            break;
        }

        saveIntoDB(dbPath, tareas.listadoArr)
        await pausa();

    } while (opt !== '0');

    console.log(colors.red('Exit ==>'));
}

main()