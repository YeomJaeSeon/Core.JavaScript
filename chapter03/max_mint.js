var numbers = [10, 20, 3, 16, 45];

let max = Math.max(numbers);
console.log(max)

let max2 = Math.max.apply(null, numbers)
console.log(max2)

//spread 연산자로 가능
let max3 = Math.max(...numbers)
console.log(max3)