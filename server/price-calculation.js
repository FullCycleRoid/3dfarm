const NodeStl = require("node-stl");



function priceCalculation(stl) {
    let volume = stl.volume
    let weight = stl.weight
    let size = stl.boundingBox
    console.log(volume , "cm3")
    console.log(weight, "gm")
    console.log(size, "mm")
    let basicFdm = volume * 9.5
    let forMax = volume * 13.5
    let basicPhoto = volume * 14.5
    let burnPhoto = volume * 19.5
    let nylon = volume * 17.5
}

function stlHandler(file) {
let stl = new NodeStl(file.path)
priceCalculation(stl)

}


module.exports = stlHandler
