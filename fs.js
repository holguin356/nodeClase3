// File System
const fs = require('fs')
const { CLIENT_RENEG_LIMIT } = require('tls')

// try{
//     const data = fs.readFileSync('./data/archivo.txt','utf8')
//     console.log(data)
// } catch (error) {
//     console.error("Error en leer un archivo", error)

// }

// try {
//     fs.writeFileSync('./data/archivoNuevo.txt','contenido Nuevo')
//     console.log('Archivo creado con exito')
// } catch (error) {
//     console.error("Error en leer un archivo", error)
// }

// try {
//     const contenidoAnterior = fs.readFileSync('./data/archivo.txt', 'utf8')
//     console.log('contenido anterior', contenidoAnterior)
//     const nuevoContenido = contenidoAnterior + '\nEste es el nuevo contenido'
//     fs.writeFileSync('./data/archivo.txt',nuevoContenido)
//     console.log('Archivo creado con exito')
// } catch (error) {
//     console.error("Error en leer un archivo", error)
// }
try {
    fs.unlinkSync('./data/archivoNuevo.txt')
    console.log('archivo eliminado con exito')
} catch (error) {
    console.error("Error en eliminar", error)
}
