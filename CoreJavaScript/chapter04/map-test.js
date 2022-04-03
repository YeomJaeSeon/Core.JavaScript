var arr = [10, 20, 30]

var newArr = arr.map(function (currentValue, index, arr){
    console.log(currentValue, index, arr)
    return currentValue + 5;
})

console.log(newArr)

