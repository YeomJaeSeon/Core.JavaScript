var Animal = function (gender){
    this._gender = gender;
}

Animal.prototype.getGender = function (){
    return this._gender;
}

var lion = new Animal('female') // new연산자로 Constructor함수를 호출하면 instance가 생성되는데, instance의 생략가능한 프로퍼티인 '__proto__'객체는 Constructor의 프로퍼티 'prototype'을 참조한다.
//그 삼각형 생각해내자.
console.log(lion.__proto__ === Animal.prototype)

//instance 의 __proto는 Constructor의 prototype을 참조하기에 같다.

console.log(lion.__proto__.getGender()) //Animal.prototype을 참조하기에, getGender() 함수는 존재하여 호출된다. 근데 this._gender이 undefined이다..
//this는 메서드호출이기에 lion.__proto__, 즉 Animal.prototype이다. Animal.prototype에는 getGender밖에없다.

console.log(lion.getGender()) //그런데 instance의 __proto__ 프로퍼티는 생략가능하다. 
//이렇게되면 getGender의 this는 lion(인스턴스)이되고, getGender도 __proto__프로퍼티가 실질적으로호출한것이므로 호출된다.(생략됐을뿐이지)

//참 복잡하다.

/**
 * 프로토타입 정리
 * new 연산자로 Constructor 를 호출하면, instance가 생성되는데, instance의 생략가능한 __proto__ 프로퍼티는 Constructor의 프로퍼티인 prototype객체를 참조한다.
 * 
 * 인스턴스가 __proto__를 생략하여 호출한다는 것은, this가 인스턴스가 되게 할 수도 있고, Constructor의 prototype의 프로퍼티들을 호출할수도 있다는 것이다.

 */