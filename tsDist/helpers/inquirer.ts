const colors = require('colors')
const inquirer = require('inquirer');

const preguntas:object[] = [
    {
        type: 'list', 
        name: 'option',
        message: '¿Qué desea hacer?\n',
        choices: [ 
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const inquireMenu = async(): Promise<object[]> => {

    console.clear();

    console.log(colors.green(`================================`));
    console.log(colors.red(`     Seleccione una opcion      `));
    console.log(colors.green(`================================\n`));

    const {option} = await inquirer.prompt(preguntas);

    return option;

}

const pausa = async(): Promise<any> => {

    const cuestion = [
        {
            type: 'input',
            name: 'enter',
            message: `Pulse ${colors.blue('ENTER')} para continuar\n`
        }
    ]
    console.log('\n');
    
    await inquirer.prompt(cuestion)
}

export {inquireMenu, pausa}
