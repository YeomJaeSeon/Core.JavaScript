var Rectangle = function(width, height){
    this.width = width;
    this.height = height
}

Rectangle.prototype.getArea = function (){
    return this.width * this.height
}

var Square = function(width){
    Rectangle.call(this, width, width)
}

var Bridge = function(){}
Bridge.prototype = Rectangle.prototype
Square.prototype = new Bridge()
Object.freeze(Square.prototype)

var sq = new Square(10)
console.log(sq.getArea())
console.log(sq)
console.log(sq.__proto__.__proto__ === Bridge.prototype)
console.log(Bridge.prototype)
console.log(Bridge.prototype === Rectangle.prototype)