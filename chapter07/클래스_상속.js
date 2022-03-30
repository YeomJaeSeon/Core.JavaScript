// 프로토타입 기반 언어인 자스는, 클래스의 상속을 구현하기 위해 고민을 많이했다. 프로토타입을 이용해서.. (ES5 이전에.)
var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i = 0; i < args.length; i++){
        this[i] = args[i];
    }
    this.length = args.length
}

Grade.prototype = []
var g = new Grade(100, 80)
console.log(g)

g.push(90)
console.log(g)

delete g.length
console.log(g)
g.push(1000)

console.log(g.length) //length가 1인 이유는 g의 length프로퍼티가 지워져서 프로토타입 체인 관계에서 프로토타입체이닝을 통해 g.__proto__(Grade.prototype)의 length를 읽어서 거기에 1을 추가한것이다.

//이렇게 클래스가 구체적인 데이터를 지니는 상황 (Grade.prototype = [])에서는 이러한 문제가 발생할수있다.

var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function (){
    return this.width * this.height
}

var rect = new Rectangle(3, 4);
console.log(rect.getArea())

// var Square = function(width){
//     this.width = width;
// }
// Square.prototype.getArea = function(){
//     return this.width * this.width
// }
//Rectangle이랑 Square비슷한 부분이 많다. 

// var Square = function(width){
//     this.width = width;
//     this.height = width
// }

// Square.prototype.getArea = function(){
//     return this.width * this.height;
// }

//Square.prototype.getArea 메서드가 Rectangle.prototype.getArea와 같다. Rectangle을 부모클래스로하여 해당 메서드를 Square가 상속받으면 될듯싶다.
var Square = function(width){
    Rectangle.call(this, width, width)
}
Square.prototype = new Rectangle() //이게문제다. sq.width나 height를 삭제하고 해당 프로퍼티들을 찾을때
//sq.__proto__.width가 이미 존재하기에 문제가 발생할수있다.()
var sq = new Square(10);

console.log(sq.getArea()) //100
delete sq.width

console.log(sq.getArea()) //NaN
sq.__proto__.width = 10000
console.log(sq.getArea()) // 100000 

