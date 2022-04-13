if(1 || 0){ // Boolean으로 casting if(true || false) 와 같다.
    console.log('hi')
}

// ||(OR)논리연산자는 피연산자 모두 Boolean으로 casting하는데, 왼쪽에서부터 Boolean으로 형변환했을 때,
// true가 나오면 연산멈추고, Boolean으로 형변환전 값을 반환한다.
console.log(1 || 0) // 1
console.log(null || 0 || 1) //1
console.log(undefined || null || 0) //피연산자 모두 Boolean으로 casting했을떄 false이면 마지막 값(형변환전)읇 반환

//빈문자열Boolean casting시 false임
let firstNAme = ""
let lastName = ""
let nickName = "바이올렛"

console.log(firstNAme || lastName || nickName || "익명") //OR의 피연산자 모두 Boolean으로 casting되고 왼쪽에서부터 캨스팅되면서 true인 녀석을 찾고 casting전 값을 반환한다.
nickName = ""
console.log(firstNAme || lastName || nickName || "익명")

// == 단락평가 ==// 왼쪽부터 시작해 평가를 시작하는데, true를 만나면 나머지는 평가하지 않고 멈춘다. 이걸 단락평가라고함.
true || console.log("hello")
false || console.log("bye")

if(1 && 0){ // &&도 피연산자를 각각 Boolean으로 casting, 둘다 true일 때만 true
    console.log('1 && 0')
}

// &&는 ||의 반대, 첫번재 falsy를 반환, 모두 true면 마지막 형변환전 값 반환
console.log(1 && 0)
console.log(1 || 0)

console.log(1 && 56) //true && true이므로 마지막 값 반환
console.log(null && 5)
console.log(null || 5)
console.log(Boolean(0))
console.log(0 && '아무거나 와도상관없음 어차피 이값 반환하지않아 왼쪽이 falsy이므로')

function func(name){
    console.log(name)
}
console.log(Boolean(func('hi')))

//Boolean auto casting , 논리연산자 !를 이용해서
console.log(!!0) // 1. Boolean casting, 2. 그 역 반환 => 논리연산자 !

const value = 2 && 3
console.log(`value : ${value}`)

const age = 1
if(!(age >= 14 && age <= 90)){
    console.log("속하지 않습니다.")
}
if(age < 14 || age > 100){
    console.log('속하지 않습니다.')
}
console.log(Boolean(-1))
console.log(0 || undefined || -1 || '')

console.log(0 || "" || null || undefined) // undefined


0 || console.log('hi') // hi출력안됨

console.log("1" && "" && 100) // ""

console.log("1" && "2" && 100) //100

0 && console.log("난 평생 출력안되!~!@~!@")

console.log(!1) //false


console.log(!!1) // true
console.log(Boolean(1)) // true
//두 문장은 같음