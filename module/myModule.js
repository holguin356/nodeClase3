// Common JS modules es un sistema de modulos en node.js que permite importar y exportar funcionalidades entre archivos utilizando require() para importar y module.exports para exportar

const nombre = "Maria Jose Martinez Marulanda"
module.exports = nombre
//console.log(module)

const myWeb = "www.google.com"
const myNumber = 29
const myArray = [10, 20, 30]
const user = {
    name: "Ryan",
    lastname: "Raynolds"
}

module.exports = {
    myWeb,
    myNumber,
    myArray,
    user
}