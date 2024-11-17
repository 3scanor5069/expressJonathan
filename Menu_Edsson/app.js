const { menu, pausa } = require("./models/menu")

const principal = async() => {
    let opt = '0';

    do{
        opt = await menu();
        await pausa();
    } while(opt !== 5) 

}

principal();