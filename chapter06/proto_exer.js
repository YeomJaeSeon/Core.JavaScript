var Person = function (name){
    this._name = name;
}

Person.prototype.getName = function(){
    return this._name;
}

var jaeseon = new Person('재선')
console.log(jaeseon.getName())
//Constructor의 prototype프로퍼티를 가르키는 인스턴스의 __proto__ 프로퍼티는 생략가능하다.
// 인스턴스가 바로 prototype 프로퍼티의 프로퍼티들을 가르키는것과 같은 효과를 낼 수 있다.

