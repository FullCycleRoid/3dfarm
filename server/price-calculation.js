const NodeStl = require("node-stl");

let stlModelValues = {}

function stlHandler(file) {
    let stl = new NodeStl("./" + file.path)

    let volume = stl.volume.toFixed(0)

    if (volume < 50) volume = volume * 5

    stlModelValues["volume"] = stl.volume.toFixed(0)
    stlModelValues["x"] = stl.boundingBox[0].toFixed(0)
    stlModelValues["y"] = stl.boundingBox[1].toFixed(0)
    stlModelValues["z"] = stl.boundingBox[2].toFixed(0)
    stlModelValues["weight"] = stl.weight.toFixed(0)

    stlModelValues["basicFdm"] = (volume * 9.5).toFixed(0)
    stlModelValues["forMax"] = (volume * 13.5).toFixed(0)
    stlModelValues["basicPhoto"] = (volume * 14.5).toFixed(0)
    stlModelValues["burnPhoto"] = (volume * 19.5).toFixed(0)
    stlModelValues["nylon"] = (volume * 17.5).toFixed(0)

    return  stlModelValues
}


module.exports = stlHandler
