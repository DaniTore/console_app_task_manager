import Tarea from "./models/tarea";
import Tareas from "./models/tareas";

const colors = require('colors')

const  {inquireMenu, pausa}  = require('./helpers/inquirer');

const main = async() => {
    let opt = '';

    do {
        
        opt = await inquireMenu();  
        //console.log({opt}); 
       

        await pausa();

    } while (opt !== '0');

    console.log(colors.red('Exit ==>'));
}

main()