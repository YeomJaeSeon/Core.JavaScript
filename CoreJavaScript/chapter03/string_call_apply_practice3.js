var str = 'abc def';
//call이나 apply를 이용하면 이렇게 문자열에도 배열 메서드를 사용할수있돠.
// Array.prototype.push.call(str, ', pushed string') //js string의 length프로퍼티는 readonly
//
Array.prototype.concat.call(str, 'string');
console.log(str)

let result = Array.prototype.every.call(str, function(char) { return char !== ' '});
console.log(result)

let result2 = Array.prototype.some.call(str, function(char) {return char !== ' '});
console.log(result2)

// var newArr = Array.pro
var newArr = Array.prototype.map.call(str, function(char){
    return char + '!';
})
console.log(newArr)

var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i){ return string + char + i;}, ''
])
console.log(newStr)

