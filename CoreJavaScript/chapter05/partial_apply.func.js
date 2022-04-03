var add = function (){
    console.log(arguments)
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}
var addPartial = add.bind(null, 1, 2, 3, 4, 5); //bind메서드가 부분적용함수
console.log(addPartial(6, 7, 8, 9))

//부분적용함수 : n개의 인자를 받는 함수에 미리 m개의 인자만 전달하고 m - m개의 인자를 나중에 전달하면 ㄱ때서야 함수가 실행되는 함수.. 별이상한 함수가다있네
//bind가 부분적용함수이다. (this  명식적으로 지정하는것 이외.

const arr = [1, 2, 3, 4, 5]
const result = arr.slice(1)
console.log(arr)
console.log(result)