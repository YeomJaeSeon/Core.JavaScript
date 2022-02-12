/**
 * undefined 자바스크립트 엔진이 자동으로 할당할 경우 3가지
 */
var a;
console.log(a) //자동으로 자바스크립트 엔진이 undefined할당

var obj = {a: 1};
console.log(obj.a)
console.log(obj.b) // 객체의 없는 프로퍼티에 쩝근할시에도 자바스크립트 엔진이 undefined할당

var func = function() {};
var c = func() //return 이 없으면 자바스크립트 엔진은 자동으로 undefined 를 리턴한것으로 간주한돠..
console.log(c)

/**
 * undefined와 배열
 */

var arr1 = []
arr1.length = 3 // undefined조차 할당되지 않음
console.log(arr1)

var arr2 = new Array(3);
console.log(arr2)

var arr3 = [undefined, undefined, undefined];
console.log(arr3)

//즉 empty 와 undefined는 다르다!
//empty는 배열 순회할때 empty면 순회하지 않는다.