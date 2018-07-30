const nombre = {
    demand: true,
    alias: 'n'
}
const libro = {
    demand: true,
    alias: 'l'
}

const argv = require('yargs')
    .command('nuevo', 'Nuevo usuario en la biblioteca', ({
        nombre
    })) 
    .command('usuarios', 'Lista de los usuarios registrados en la biblioteca', ({
        
    }))
    .command('consultar', 'Consultar si el libro esta disponible', ({
        libro
    }))
    .command('libros', 'Lista de libros en la biblioteca', ({
        
    }))
    .command('leer', 'Escoge el libro que vas a ocupar', ({
        nombre, 
        libro
    }))
    .command('desocupar', 'Desocupa el libro', ({
        libro
    }))
    .help()
    .argv

module.exports = {
    argv
}    