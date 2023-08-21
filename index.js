const fs = require("fs")
let SVG = require("./lib/svg")
import inquirer from 'inquirer';
import fs from "fs/promises";

let example = new SVG("AND", "green", "triangle", "yellow")



let {shape, text, shapeColor, textColor} = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: "Please select the shape you would like to use for your logo:",
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'text',
            message: "Please provide up to three characters for your logo:",
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: "Please select a color for the shape by entering the word or the hexadecimal number:",
        },
        {
            type: 'input',
            name: 'textColor',
            message: "Please select a color for the text by entering the word or the hexadecimal number:",
        },
        
    ])

let logoSVGContent = `
${shape}

${textEntry(text)}

${shapeColor}

${textColor}
`


fs.writeFile("logo.svg", logoSVGContent, function(err){
    if(err){
        console.log(err)
    }
})


function textEntry(text) {
    if ( text > 3) {
        return `Please provide no more than three characters for the logo.`
    }
}


