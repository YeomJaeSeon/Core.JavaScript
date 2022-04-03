// 프로토타입 체이닝을 통해 클래스상속을 구현하면 또다른 문제는 SubClass의 인스턴스의 constructor(instance.__proto__.constructor)가 Superclass를 가르킨다.(SubClass.prototype에는 constructor가 사라지게되어 프로토타입 체이닝으로 Superclass.prototype.constructor(instance.__proto__.__proto__.construtor)를 가르키는 상태임.)

//SubClass.prototype.constructor를 다시 만들어 SubClass를 바라보도록해주면됨
var Rectangle = function (width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function(){
    return this.width * this.height
}

var Square = function(width){
    Rectangle.call(this, width, width)
}

Square.prototype = new Rectangle()
delete Square.prototype.width
delete Square.prototype.height



var sq = new Square(12)
console.log(sq.getArea())
// console.log(Square.prototype)
// console.log(sq.constructor === Rectangle) //이게 문제임 constructor는 Square를 가르켜야 적절함 근데 17번째 줄에서 Square.prototype에 Rectangle.prototype 을 할당하였기에 Square.prototype.consturctor가 사라짐..

Square.prototype.constructor = Square //이렇게 해주면됨 직접
Square.prototype.hello = 'hello'
console.log(sq.__proto__)
console.log(Square.prototype)
console.log(sq.constructor) //Square