const fs = require('fs')
const {usuariosRegistrados} = require('./usuarios')

const ocuparLibro = (usuario, libro) => {

    let consulta = consultarLibro(libro)

    if(consulta) {
        console.log('El libro está siendo ocupado');
    }
    else{
        let librosDB = librosBiblioteca()
        let usuariosDB = usuariosRegistrados() 
    
        let usuarioDB = usuariosDB.find( db => db.nombre == usuario)
        
        if(usuarioDB){
            for(let i = 0; i < librosDB.length; i++){
                if(librosDB[i].nombre === libro){
                    librosDB[i].uso = true
                    librosDB[i].ocupante = usuarioDB.nombre
                    console.log(`El libro "${librosDB[i].nombre}" ahora esta en uso por ${librosDB[i].ocupante}`);
                    break;
                }
            }
            
            actualizarBiblioteca(librosDB)
        }
    
        else{
            console.log('No se encontró el usuario')
        }
    }
}

const desocuparLibro = (libro) => {
    
    let librosDB = librosBiblioteca()
    
    for(let i = 0; i < librosDB.length; i++){
        if(librosDB[i].nombre == libro){
            console.log(`El libro ${libro} será desocupado`)
            librosDB[i].uso = false
            librosDB[i].ocupante = ''
            actualizarBiblioteca(librosDB)
            break
        }
    }
}

const consultarLibro = (libro) => {
    
    let libroDB = librosBiblioteca().find( db => db.nombre == libro)

    if(libroDB.uso) {
        console.log('Consulta de libro: OCUPADO')
        return true
    }
    else {
        console.log('Consultado de libro: DISPONIBLE')
        return false
    }
}

const actualizarBiblioteca = (actualizacion) => {

    fs.writeFile('./db/biblioteca.json', JSON.stringify(actualizacion), (err) => {
        if (err) throw err
    })
}

const librosBiblioteca = () => {

    return require('./db/biblioteca.json')
}


module.exports = {
    consultarLibro,
    ocuparLibro,
    librosBiblioteca,
    desocuparLibro
}