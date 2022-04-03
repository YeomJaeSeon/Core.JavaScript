function Pet(name){
    this._name = name;
}

Pet.prototype.getName = function (){
    return this._name;
}

var cat = new Pet('nabi')
// new 연산자로 생서자를 호출하면, instance가 생성되는데, instance의 생략가능한 프로퍼티인 '__proto__'는 생성자함수의 prototype프로퍼티를 참조한다.

//__proto__생략가능
console.log(cat.getName())
//getName의 this는 cat을 가르키지만, __proto__를 생략할수있어서 getName을 호출할수도있다. - 꽤나복잡.

//오늘의 결론!
// new 연산자를 이용해 생성자 함수를 호출하면 인스턴스가 만들어지는데, 이 인스턴스의 생략가능한 프로퍼티 __proto__ 는 생성자 함수의 프로퍼티 prototype을 참조한다.
//인스턴스의 프로퍼티 __proto__ 객체는 생략가능하기에, 인스턴스가 생성자의 prototype의 프로퍼티들에 바로 접근하는 것처럼 보인다.
var arr = new Array(1, 2, 3) // new를 이용해 생성자함수로 배열만들어도되고, 리터럴로, var arr = [1, 2, 3] 만들어도 똑같다.

const result = arr.concat([4, 5, 6]);
console.log(result)

const result2 = arr.__proto__.concat([4, 5, 6]); //concat 함수 내부의 this는 arr.__proto__(=Array.prototype)을 가르키기에 당연히 원본 배열 [1, 2 ,3]은 알수가없다. 
// 생략가능한 __proto__특징을 이용해 인스턴스가 바로 prototype의 프로퍼티를 호출하면 this를 인스턴스로 가져가고, prototype에도 접근할수있는 마법을 보여준다 
console.log(result2)
//실은 arr.__proto__.forEach로 호출한것. (__proto__)는 생략되어있다.
