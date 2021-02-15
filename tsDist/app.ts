import Tareas from "./models/tareas";

const colors = require('colors')

const  {inquireMenu, pausa, leerInput}  = require('./helpers/inquirer');
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
                tareas.crearTarea(desc)
            break;
        
            case '2':
            tareas.listarTareas()
            break;
        }

        saveIntoDB(dbPath, tareas.listadoArr)
        await pausa();

    } while (opt !== '0');

    console.log(colors.red('Exit ==>'));
}

main()