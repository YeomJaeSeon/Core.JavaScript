/**
 * 자바에서 오버라이딩 배웠다. 부모로부터 상속받은 메서드 자신의 입맛에 맞게 재정의한 메서드를 말한다.
 * (오버로드 vs 오버라이딩)
 * 
 * 자스는 프로토타입 기반언어라 상속이없다.
 * 인스턴스의 __proto__를 통해 생성자함수의 prototype를 참조하여 사용한다.
 * 
 * 만약 인스턴스 자신의 프로퍼티의 메서드와 생성자함수의 prototype의 메서드가 이름이 같다면 
 * instance.method()했을때 어떤 메서드가 실행될까?
 * __proto__ 가 가르키는 메서드가 실행될까? 아니면 인스턴스 자신의 프로퍼티인 method가 실행될까?
 */

var Person = function(name){
    this._name = name;
}

Person.prototype.getName = function (){
    return this._name;
}

var jaeseon = new Person('염재선')
jaeseon.getName = function(){
    return '나는야 염재선'
}

console.log(jaeseon.getName())//과연? -> jaeseon의 프로퍼티인 getName이 호출된다.
//js 엔진은 getName이라는 프로퍼티를 인스턴스 객체에서 가장 가까운 대상부터 찾는다. __proto__아래있는 getName보다 jaeseon.getName이 더 가까우니 이걸 사용한다.
//이렇게 js는 얹는다. __proto__.getName을 없애는게 아닌 해당 getName위에 jaeseon.getName을 얹어 먼저 찾는 대상이된다.

//prototype.getName을 호출하려면 __proto__를 생략하지않으면된다 

console.log(jaeseon.__proto__.getName())//undefined
//당연히 undefined다. this는 (점 표기법)메서드로 호출하였기에 jaeseon.__proto__가 된다. jaeseon.__proto__는 Person.prototype이므로 Person.prototype에는 name이라는 프로퍼티가 없어 undefined가 출력된다.

//명시적으로 this를 지정하면된다.(call, apply, bind)
//1. call
console.log(jaeseon.__proto__.getName.call(jaeseon));
//2. apply
console.log(jaeseon.__proto__.getName.apply(jaeseon))
//3. bind
const bindFunc = jaeseon.__proto__.getName.bind(jaeseon);
console.log(bindFunc())

//복습겸! this를 명시적으로 지정한 함수를 리턴한다.
console.log(bindFunc.name) //bound이다. - bind 결과 함수의 name프로퍼티는 무조건 bound이다. (bind한 결과 함수인지 식별하기 위해.)