import Tarea from "../models/tarea";

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
                name: colors.green('1.') + 'Crear tarea'
            },
            {
                value: '2',
                name: colors.green('2.')+ 'Listar tareas'
            },
            {
                value: '3',
                name: colors.green('3.') + 'Listar tareas completadas'
            },
            {
                value: '4',
                name: colors.green('4.') + 'Listar tareas pendientes'
            },
            {
                value: '5',
                name: colors.green('5.') + 'Completar tarea(s)'
            },
            {
                value: '6',
                name: colors.green('6.') + 'Borrar tarea'
            },
            {
                value: '0',
                name: colors.green('0.') + 'Salir'.red
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

const leerInput = async(message: string): Promise<string> => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value: any ): string | boolean {
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question)
    return desc;
}

const listarTareasBorrar = async (tareas: []) => {
   
    const choices = tareas.map((tarea: any, i: number) => {

        const idx = `${i + 1}. `.green
        return {
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.  '.green + 'Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas);
    return id
}

const mostrarCheckList = async (tareas: []) => {
   
    const choices = tareas.map((tarea: Tarea, i: number) => {

        const idx = `${i + 1}. `.green
        return {
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`,
            checked: (tarea.completadoFecha)? true : false 
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(pregunta);
    return ids
}

const confirmar = async(message: any) =>{

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok 

}

export {inquireMenu,
        pausa, 
        leerInput, 
        listarTareasBorrar,
        confirmar,
        mostrarCheckList}
