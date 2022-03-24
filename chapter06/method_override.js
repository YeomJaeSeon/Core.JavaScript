// 인스턴스가 prototype의 프로퍼티와 같은 이름의 프로퍼티를 가지고 있따면?
var Person = function(name){
    this.name = name;
}

Person.prototype.getName = function (){
    return this.name;
}

var iu = new Person('지금');
iu.getName = function (){ // 얘가 덮어씌운거 가튼데..?
    return '바로' + this.name
}
console.log(iu.getName())

// js 엔진은 getName을 찾는 순서가 
//1 자신의 프로퍼티찾기
//2. __proto__프로퍼티 찾기
//자신과 가까운순서로찾는다.

//오버라이딩은 재정의로 교체가아닌 '얹는'것이다.
//얹는 것이므로 우선순위 밀린 메서드에도 접근할수있는 방법이 있겠다.

//__proto__ 생략하지않고 쓰면된다.
// Person.prototype.name = '지금'
console.log(iu.__proto__.getName())

console.log(iu.__proto__.getName.call(iu)) // call이용해서 this iu 인스턴스 명시적으로 지정해버리면됨
