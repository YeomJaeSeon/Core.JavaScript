Array.prototype.map = function (callback, thisArg){
    var mappedArr = []
    for(var i = 0; i < this.length; i++){
        var mappedValue = callback.call(thisArg || global, this[i], i, this); //내부에서 call을 사용하기에 map두번째 인자에 전달되는 thisArgs를 this가 바라보도록 명시적으로 지정할 수 있다.
        mappedArr[i] = mappedValue;
    }

    return mappedArr
}

var arr = [10, 20, 30]
var result = arr.map(function(currentValue, index, arr){
    console.log(this)
    return currentValue + 1;
}, arr)

console.log(result)