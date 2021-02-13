require('colors.ts')

const  {inquireMenu, pausa}  = require('./helpers/inquirer');

console.clear();

const main = async() => {
    let opt = '';

    do {
        
        opt = await inquireMenu();  
        //console.log({opt}); 
        await pausa();

    } while (opt !== '0');

    console.log('Exit ==>'.red);
}

main()