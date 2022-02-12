/**
 * emtpy와 배열
 */

var arr1 = [undefined, 1];
var arr2 = []
arr2[1] = 1;

arr1.forEach(function (v, i){ console.log(v, i);});
arr2.forEach((v, i) => console.log(v, i));

let arr1_v1 = arr1.map((v, i) => v + i);
let arr2_v1 = arr2.map((v, i) => v + i);
console.log("//==v1==//")

console.log(arr1_v1)
console.log(arr2_v1)

let arr1_v2 = arr1.filter((v) => !v);
let arr2_v2 = arr2.filter(v => !v);

console.log("//==v2==//")
console.log(arr1_v2)
console.log(arr2_v2)

/**
 * undefined는 사용자가 지정해주기 vs 자바스크립트 엔진이 자동으로 지정해주기 두가지 방법이있음
 * 전자를 하면 실제로 존재하므로 배열에서 undefined를 사용자가 직접지정하면 순회한다.
 * 그러나 후자를하면 실제로 존재하지 않으므로 배열을 순회하면 순회되지 않는다.(배열도 객체이다. 인덱스에 해당되는 값은 프로퍼티이므로 프로퍼티에 값을 안줬으니 순회하지 않는것이 당연!)
 */