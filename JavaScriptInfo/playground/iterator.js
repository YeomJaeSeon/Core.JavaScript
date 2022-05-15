// 이터레이터 구현하기

let range = {
    from:1,
    to: 5
}

range[Symbol.iterator] = function(){
    return{ // 이게 iterator객체. iterator객체는 next라는 메서드를 가지고 있어야한다.
        current: this.from,
        last: this.to,
        next(){
            console.log(`current: ${this.current}, last:${this.last}`)
            if(this.current <= this.last){
                return { done: false, value:this.current++};
            }else{
                return {done: true}
            }
        }
    }
}

for(let value of range){
    console.log(value)
}

// iterable객체는 관심사의 분리
// 순회하는 next()메서드는 range가 가지고있는게 아닌, range[Symbol.iterator]가 가지고 있음
// 이터레이터 객체(next가지고 있는)와 반복 대상의 객체(range) 를 분리! -> 관심사의 분리


for(let char of "test"){
    console.log(char)
}


let str = '𝒳😂';
for(let char of str){
    console.log(char)
}


str = 'Hello'
let iterator = str[Symbol.iterator]();

let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2
}
for(let value in arrayLike){
    console.log(value)
}

// while(true){
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value)
// }
let notArrayLike = {
    0: 'Hello',
    1: 'World',
}
Array.from(notArrayLike)

console.log(String.prototype[Symbol.iterator]())