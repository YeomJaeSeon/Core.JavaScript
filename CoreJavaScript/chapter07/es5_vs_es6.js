//es6에는 클래스가 도입되었다. es5이전 클래스를어떻게 이용했는지 지금까지 알아왔다. 여기서 es5와 es6을 직관적으로비교해보자.
var ES5 = function(name){
    this.name = name;
}

ES5.staticMethod = function(){
    return this.name + ' staticMethod'
}
ES5.prototype.method = function(){
    return this.name + ' method'
}
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod())
console.log(es5Instance.method())

var ES6 = class {
    hello = 'hello' // 인스턴스 생서앟면 인스턴스의 프로퍼티로 할당되네 !!
    constructor(name){ //생성자로 function키워드없이 가능하네
        this.name = name;
    } //,콤마로 구분안해도되네..
    static staticMethod () { //생성자함수.staticMethod네..
        return this.name + ' staticMethod';
    }
    method(){ //생성자함수(클래스).prototype.method 네.. 엄청 간단하다 자바와 엄청 비슷해졌다. 다른건 멤버변수를 따로 지정하지않고 생성자함수내에서만 지정하면되네
        return this.name + ' method'
    }
}
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod())
console.log(es6Instance.method())

//자바랑 걍 완전 비슷해졌다
//프로토타입 기반 JS는 ES6부터 클래스가 등장하고 자바의 클래스와 굉장히 비슷해졌다. 다른건, 멤버변수가없이 생성자로 변수 초기화해도 인스턴스의 프로퍼티에 해당 멤버변수가 할당된다는것?!