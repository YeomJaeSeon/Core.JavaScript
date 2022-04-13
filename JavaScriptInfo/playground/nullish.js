let firstName = null;
let lastName = null;
let nickName = '바이올렛'

console.log(firstName ?? lastName ?? nickName ?? '익명의 사용자')
console.log(firstName || lastName || nickName || '익명의 사용자')

// ||와 ??의 차이
// 값이 정의 되었느냐 안되어이있느냐로 구분할수있음

let height = 0;
console.log(height || 100)
console.log(height ?? 100) //hegiht가 null이나 undefiend가 아닌 정의된 값(0)이므로 첫번째 값이 반환됨

height = null
let width = null;
console.log(height ?? 100 * width ?? 50) //100 * width결과가 반환될것.ㄴ
console.log(100 * null) // 0이네 NaN이 아니라

console.log((1 && 2) ?? 3) // 2 

console.log('hi' ?? 2)
console.log(null ?? 2)
console.log(undefined ?? 2)

const value = 0

console.log(value ?? 100) // 0
console.log(value || 100) // 100