/**
 * js는 클래스가없다. 프로토타입기반 언어이다. ES6부터 클래스가 만들어졌지만 내부적으로 프로토타입을 활용한것이다. 프로토타입을 문법적으로이용하나 클래스라는 관점에서 봐도 유사한점이 많아
 * 클래스관점에서 생각해도 무방하다. 
 */

//생성자 함수
var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
}

//프로토타입 메서드 (인스턴스 메서드)
Rectangle.prototype.getArea = function (){
    return this.width * this.height
}

//static 메서드 (생서자함수의 메서드인데 인스턴스가 접근할수없기에 스태틱 메서드라고부르자.)
Rectangle.isRectangle = function(instance){
    return instance instanceof Rectangle && instance.width > 0 && instance.height > 0
}

// 인스턴스 생성
var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea())
// console.log(rect1.isRectangle(rect1)) //인스턴스가 생성자함수의 메서드에 바로접근할수없다. 생략가능한 프로퍼티인 __proto__를 통해서 생성자함수의 prototype프로퍼티에만 접근할수있다.
//생성자함수의 메서드를 스태틱메서드라한다.
console.log(Rectangle.isRectangle(rect1)) // 스태틱메서드는 이렇게 호출