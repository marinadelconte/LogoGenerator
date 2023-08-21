let SVG = require("./lib/svg")
const inquirer = require('inquirer');
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes")


const main = async () => {
    let response = await inquirer
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

    console.log(response)
    let shape;
    if (response.shape === "Circle") {
        shape = new Circle()
    }
    if (response.shape === "Square") {
        shape = new Square()
    }
    if (response.shape === "Triangle") {
        shape = new Triangle()
    }

    shape.setColor(response.shapeColor);
    let SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

    </svg>`

    console.log(SVG);
    fs.writeFile("logo.svg", SVG, function (err) {
        if (err) {
            console.log(err)
        }
    })
}


main();