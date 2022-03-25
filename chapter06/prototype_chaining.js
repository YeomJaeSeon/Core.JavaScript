var arr = [1, 2];
console.log(Array.prototype.toString.call(arr))
console.log(Object.prototype.toString.call(arr))

console.log(arr.toString())

arr.toString = function(){
    return this.join('_')
}

console.log(arr.toString()) //__proto__까지 안가고 arr.toString인 프로퍼티가 있기에 해당 녀석을 검색 - 메서드오버라이딩
console.log(arr.__proto__.toString.call(arr)) //이렇게 해야 arr.__proto__.toString 즉, Array.prototype.toString을 호출할수있다. (this 명시적으로 bind해야 원하는데로 동작한다.)


//추가 
//arr인스턴스에서 toString 프로토타입 체이닝을 하면 가장 가까운 대상부터 찾는데 그럼 Object.prototype.toString에는 어떻게 접근할까?
console.log(arr.__proto__.__proto__.toString.call(arr)) //이렇게 __proto__ 두번써서 접근하면 돼징~