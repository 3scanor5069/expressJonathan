
var colors = require('colors');
const inquirer = require('inquirer');

console.log(`${'Hola mundo'.red}`);

const questions = {
    type: 'list',
    name: 'options',
    message: 'escoge la opcion de tu preferencia.',
    choices: [
        
    {
        value: '1',
        name: '1. crear tarea'
    },
    {
        value: '2',
        name: '2. editar tarea'
    },{
        value: '3',
        name: '3. eliminar tarea tarea'
    },
    {
        value: '4',
        name: '4. listar tareas'
    },{
        value: '5',
        name: '5. salir'
    },
    ]
}

const menu = async()=>{
    console.clear();
    console.log(`${'==============================='.blue}`);
    console.log(`${'=      bienvenido al menu     ='.blue}`);
    console.log(`${'==============================='.blue}`);

    const {options} = await inquirer.default.prompt(questions);
    return options

}

const pausa = async()=> {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `presione la tecla ${'enter'.green}` 
        }
    ]
    await inquirer.default.prompt(question);
}

module.exports = {
    menu,
    pausa

};