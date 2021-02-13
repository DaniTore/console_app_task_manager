import { resolve } from 'path';
import Colors = require('colors.ts')

const mostrarMenu = () => {

    return new Promise( resolve => {

        console.clear();

        console.log(`================================`.green);
        console.log(`     Seleccione una opcion      `.red);
        console.log(`================================\n`.green);

        console.log(` ${'1'.green} Crear tareas`);
        console.log(` ${'2'.green} Listar tareas`);
        console.log(` ${'3'.green} Listar tareas completadas`);
        console.log(` ${'4'.green} Listar tareas pendientes`);
        console.log(` ${'5'.green} Completar tareas`);
        console.log(` ${'6'.green} Borrar tareas`);
        console.log(` ${'7'.green} Crear tareas`);
        console.log(` ${'0'.green} SALIR\n`);

        const redline = require('readline').createInterface({
            input: process.stdin, 
            output: process.stdout,
        });

        redline.question('Seleccione una opción: ', (opt: String) => {
            redline.close();
            resolve(opt);
        });

    });

}

const pause = () => {

    return new Promise<void>( resolve => {

        const redline = require('readline').createInterface({
            input: process.stdin, 
            output: process.stdout,
        });
    
        redline.question(`\nPulse ${'ENTER'.blue} para continuar\n`, ():void => {
            redline.close();
            resolve();
        })

    })
}

export { mostrarMenu, pause }