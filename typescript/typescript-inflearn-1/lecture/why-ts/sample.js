// function sum(a, b){
//     return a + b;
// }

// console.log(sum(10, '20'))

// var result = sum(1, 2)
// // result.toLocalString()

//js에서도 ts효과를 아래 주석으로 낼순있다.
// @ts-check

/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */
function sum(a, b){
    return a + b;
}

sum(1, '2')

// js Doc + @ts-check으로 타입스크립트 효과를 낼수있다.
// 그런데 너무 귀찮다. 길고.. 이렇게 jsdoc으로 일일이쓰는것보다 타입스크립트를 이용해서 타입을 정의하고 import, export하는 등 재사용하는 것이 확장면에서 훨씬 이득임
