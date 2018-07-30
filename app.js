// Ver libros disponibles
// Ocupar los libros por usuarios nuevos

const { argv } = require('./config/yargs')
const { nuevoUsuario, listarUsuarios} = require('./usuarios')
const { consultarLibro, ocuparLibro, librosBiblioteca, desocuparLibro } = require('./biblioteca')
 
const command = argv._[0]

switch(command){
    case 'nuevo':
     
        nuevoUsuario(argv.nombre)
            .then(usuario => console.log(`Nuevo usuario en la biblioteca ${usuario.nombre}`))
            .catch(err => console.log(err))

        break

    case 'usuarios':

        listarUsuarios()
        break


    case 'consultar':

        consultarLibro(argv.libro)
        break

    case 'libros': 

        console.log(librosBiblioteca());
    break
        
    case 'leer':

        ocuparLibro(argv.nombre, argv.libro)
        break

    case 'desocupar':

        desocuparLibro(argv.libro)
        break

    default :
        console.log('Comando no reconocido');    


}