const fs = require("fs")
let SVG = require("./lib/svg")

let example = new SVG("AND", "green", "triangle", "yellow")


fs.writeFile("shape.svg", example.markUp, function(err){
    if(err){
        console.log(err)
    }
})