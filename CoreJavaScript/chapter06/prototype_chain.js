//js모든 객체의  __proto__는 Object.prototype를 가르킨다.(참조한다.)
//Array의 prototype 프로퍼티도 객체이므로 prototype객체는, 정확힌 prototype(.__proto__)는 Object.prototype을 가르킨다. (__proto__)는 생략가능한 프로퍼티
var arr= [1, 2]; 
arr.push(3);
console.log(arr.hasOwnProperty)
console.log(arr.hasOwnProperty(2)) 
console.log(arr.hasOwnProperty === Object.prototype.hasOwnProperty) //hasOwnProperty는 Object.prototype의 프로퍼티이다.

//prototype 프로퍼티는 객체이다. prototype.__proto__는 Object.prototype을 가르킨다.
//그래서
console.log(Array.prototype.__proto__ === Object.prototype) //true이다.
console.log(arr.__proto__.__proto__ === Object.prototype)

//이렇게 __proto__프로퍼티 내부에 또 __proto__프로퍼티가 연쇄적으로 이어진 것을 '프로토타입 체인'이라고하고 이 체인을 통해서 검색해나가는 것을 프로토타입 체이닝이라고한다.

//메서드 오버라이딩과 같이 가까운녀석들부터 하나씩 검색해나가며 없으면 __proto__에서 찾고 또 없으면 그 내부의 __proto__에서 찾고.... 하며 프로토타입 체이닝이 이루어진다.

