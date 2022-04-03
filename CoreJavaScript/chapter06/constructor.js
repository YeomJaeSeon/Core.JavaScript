// prototype 내부엔 constructor프로퍼티가 있다.
// 당연히 인스턴스의 __proto__ 프로퍼티도 constructor 프로퍼티가 있다.(__proto__는 prototype을 가르킨다.)
// 인스턴스의 원형이 무엇인지? 알 수 있게할 때 사용함

var arr = [1, 2];
console.log(Array.prototype.constructor === Array)
console.log(arr.constructor === Array) // (인스턴스는 __proto__ 생략가능함. 생략가능하기에 인스턴스가 바로 prototype의 프로퍼티들에 접근하여 사용할수 있다.)
console.log(arr.__proto__.constructor === Array)

var arr2 = new arr.constructor(3, 4); // === var arr2 = new Array(3, 4) 
console.log(arr2);

var NewConstructor = function (){
    console.log('this is new constructor!');
}

var dataTypes = [
    1,
    'test',
    true,
    {},
    [],
    function () {},
    /test/,
    new Number(),
    new String(),
    new Boolean,
    new Object(),
    new Array()
]

dataTypes.forEach(function (d){
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor)
    //d 인스턴스의 constructor(원형)은 NewConstructor인데, instanceof 연산자론 false다.. 이상하네 true 여야하는거아닌가?
    //constructor가 바뀌더라도, 인스턴스의 원형자체가 바뀌는건아니다..!! 
})

function Hello(){

}
function Bye(){

}
var hello = new Hello();

console.log(hello.constructor, 'hello', hello instanceof Hello)
hello.constructor = Bye;
console.log(hello.constructor, 'hello', hello instanceof Bye)