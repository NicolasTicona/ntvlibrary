const fs = require('fs')

const usuariosRegistrados = () => {

    try{
        let usuarios = require('./db/usuarios.json')
    
        return usuarios
    }catch(err){
        return []
    }

}

const nuevoUsuario = (nombre) => {

    return new Promise( (resolve, reject) => {

        let usuario = {
            nombre,
        }

        let usuarios_registrados = []

        if(!nombre) reject('Nombre no válido')

        else{
            usuarios_registrados = usuariosRegistrados()

            try{
                usuarios_registrados.push(usuario)
            }catch(err){
                usuarios_registrados = [usuarios_registrados]

                if(usuarios_registrados.length == 1){
                    usuarios_registrados.push(usuario)
                }else{
                    usuarios_registrados = [usuario]
                }
            }


            fs.writeFile('./db/usuarios.json', JSON.stringify(usuarios_registrados), (err) => {
                if (err) throw err
                resolve(usuario)
            })
        }
    })
}

const listarUsuarios = () => {
    
    let usuarios = usuariosRegistrados()

    if(usuarios.length > 0){
        
        console.log('========Usuarios Registrados========');
        for(let usuario of usuarios){
            console.log(usuario);
        }
        console.log('====================================');
    }else{
        console.log('No hay usuarios registrados');
    }
}

module.exports = {
    nuevoUsuario,
    listarUsuarios,
    usuariosRegistrados
}