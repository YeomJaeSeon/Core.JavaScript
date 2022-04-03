// 클래스자체가(생성자함수) 구체적인 값을 지니기에 여러 문제가 발생. 해결하는방법으론 클래스에할당한 구체적인 값들을 모두 지워주면된다

var Rectangle = function(width, height){
    this.width = width;
    this.height = height
}

Rectangle.prototype.getArea = function(){
    return this.width * this.height
}

// var Square = function(width){
//     Rectangle.call(this, width, width)
// }
// Square.prototype = new Rectangle()//클래스에 구체적인 값을 할당. 이렇게하면 프로토타입 체이닝을 통해 클래스 상속을 구현할순있는데 여러 문제가있었지?

// var sq = new Square(10)
// console.log(sq.getArea())

// //클래스에 할당한 구체적인 값들을 모두 지워준다.
// delete Square.prototype.width
// delete Square.prototype.height
// Object.freeze(Square.prototype)

// console.log(sq.__proto__) //구체적인 값의 프로퍼티들을 모두지웠다. 
//이러한 과정을 하는 범용적인 함수를 만들어보자

var extendClass1 = function(SuperClass, SubClass, subMethods){
    SubClass.prototype = new SuperClass() //프로토타입 체인으로 클래스상속구현

    for(var prop in SubClass.prototype){
        if(SubClass.prototype.hasOwnProperty(prop)){
             delete SubClass.prototype[prop]; //구체적인 값의 모든 프로퍼티 지워준다.
        }
    }

    if(subMethods){
        for(var method in subMethods){
            SubClass.prototype[method] = subMethods[method]
        }
    }

    Object.freeze(SubClass.prototype)
    return SubClass
}

var Square = extendClass1(Rectangle, function(width){
    Rectangle.call(this, width, width)
})

var sq = new Square(10)
console.log(sq.getArea())