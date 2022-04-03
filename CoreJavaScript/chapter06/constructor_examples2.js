// constructor는 생성자 함수 원형을 가르킨다.
// prototype의 프로퍼티중 하나인데, 왜 굳이? 자기자신을 가르키는게 있지? - 인스턴스가 자신의 원형 함수가 뭔지 궁금할대 사용할수있음
// __proto__를 이용해서. __proto__는 생략가능하기에 인스턴스가 바로 constructor를 이용할수있겠쮜?

var Dog = function (name){
    this.name = name;
}

Dog.prototype.getName = function (){
    return `my name is ${this.name}`
}

var baduk = new Dog('바둑이')
// console.log(baduk.__proto__.getName())
console.log(baduk.getName())
var prototypeOfBadukInstance = Object.getPrototypeOf(baduk)
console.log(prototypeOfBadukInstance === baduk.__proto__, prototypeOfBadukInstance === Dog.prototype)
var nabi = new Dog.prototype.constructor('나비')
console.log(nabi.getName())
var bangul = new prototypeOfBadukInstance.constructor('방울이')
console.log(bangul.getName())
var yesDog = new baduk.__proto__.constructor('예스')
console.log(yesDog.getName())
var noDog = new baduk.constructor('노')
console.log(noDog.getName())