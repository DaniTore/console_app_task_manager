import Tarea from "./models/tarea";
import Tareas from "./models/tareas";

const colors = require('colors')

const  {inquireMenu, pausa, leerInput}  = require('./helpers/inquirer');

const main = async() => {
    let opt = '';
    const tareas = new Tareas()

    do {
        // Imprimir el menu
        opt = await inquireMenu();  

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc)
            break;
        
            case '2':
            // listado de las opciones
            
            console.log(tareas.listadoArr);
            break;
        }

        await pausa();

    } while (opt !== '0');

    console.log(colors.red('Exit ==>'));
}

main()