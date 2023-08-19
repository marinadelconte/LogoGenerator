class Shape {
    constructor(setColor){
        this.setColor = setColor;
    }

}

class Circle extends Shape {
    constructor(setColor, radius){
        super(setColor);
        this.radius = radius;

    }


    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.setColor}"/>`
    }

}


class Square extends Shape {
    constructor(setColor){
        super(setColor)
    }

    render(){
        return `<rect width="100%" height="100%" fill="${this.setColor}" />`
    }
}


class Triangle extends Shape {
    constructor(setColor = "green"){
        super(setColor)
    }

    render(){
        return 
    }
}

