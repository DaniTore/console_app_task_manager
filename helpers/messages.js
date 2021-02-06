"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pause = exports.mostrarMenu = void 0;
const mostrarMenu = () => {
    return new Promise(resolve => {
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
        redline.question('Seleccione una opción: ', (opt) => {
            redline.close();
            resolve(opt);
        });
    });
};
exports.mostrarMenu = mostrarMenu;
const pause = () => {
    return new Promise(resolve => {
        const redline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        redline.question(`\nPulse ${'ENTER'.blue} para continuar\n`, () => {
            redline.close();
            resolve();
        });
    });
};
exports.pause = pause;
