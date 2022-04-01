var Rectangle = class {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

var Square = class extends Rectangle{
    constructor(width){
        super(width, width) //부모클래스의 생성자호출
    }
    getArea(){
        console.log('size is: ', super.getArea()); //부모클래스의 메서드 호출
    }
} 
var rt = new Rectangle(5, 25);
console.log(rt.getArea())
var sq = new Square(100);
sq.getArea()
// console.log(sq.getArea())

//es6부터 클래스가나와서 프로토타입으로 쌩쇼하면서 부모클래스 생성자, 부모클래스 메서드 상속받아/ㅆ는데 그럴피룡없다... 내부적으론 프로토타입으로동작해도 개발자는 이렇게 쉽게 사용할수있구나.
//뭐든 만들때 힘들면 사용자는 편하구나!