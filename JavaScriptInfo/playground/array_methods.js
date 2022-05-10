let arr = ["I", "go", "home"];

console.log(arr);
delete arr[1];
console.log(arr)

console.log(arr[1])

console.log(arr.length) // 가장큰 idx + 1 -> arr의 length프로퍼티 값

let arr2 = ["I", "study", "JavaScript"];
arr2.splice(0, 1, 'Let"s', 'dance'); 
console.log(arr2)

let arr3 = [1, 2, 3, 4, 5];
let removedArr = arr3.splice(1, 2); // -> splice결과를 반환
console.log(removedArr) // 1번 인덱스부터 두개

arr = [1, 2, 3, 4, 5]
// const obj = {
//     name: '염재선',
//     age: 27,
//     [Symbol.isConcatSpreadable]: true
// }
// let concatResult = arr.concat(obj)
let concatResult = arr.concat([100, 200], 300, [400, 500])
console.log('//== concatResult == //')
console.log(concatResult)
console.log('//== arr == //')
console.log(arr)

arr.forEach((value, idx, arr)=> {
    console.log(arr)
    console.log('idx', idx)
    console.log("value", value다
})

// arr.reverse()