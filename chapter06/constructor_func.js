/**
 * var instance = new Constructor();
 * instance의 __proto__ -> Constructor(생성자 함수)의 prototype프로퍼티를 가르킨다. 
 */


// 함수 표현식으로 변수에 할당 - 대문자: 생성자함수(규칙)
var Person = function(name){
    this._name = name;
}
//생성자 함수 내부적으로 new를통해 호출했을때 this = {}만들어지고 프로퍼티들이 싺싺들어가서 리턴하게된다
// var person = new Person('nabi');
// console.log(person._name)

Person.prototype.getName = function(){
    return this._name;
}

var suzi = new Person('suzi');
// console.log(suzi.__proto__)
// console.log(Person.prototype)
//같은걸 바라보네. - intance의 __proto__ 객체는 Constructor(생성자 함수)의 prototype객체를 참조한다.

console.log(suzi)

console.log(suzi.__proto__.getName())
console.log(suzi.getName()) // 인스턴스의 __proto__는 생략가능하다. - 그냥 코런갑다하자.