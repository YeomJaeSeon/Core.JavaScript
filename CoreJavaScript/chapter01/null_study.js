var n = null;
console.log(typeof n) //typeof null -> object이다.. 이건 자바스크립트 자체 버그?!

console.log(n == undefined)
console.log(n == null)

console.log(n === undefined);
console.log(n === null) // ===을 통해서 null undefined구분가능!