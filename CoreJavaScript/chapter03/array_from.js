var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
//유사배열 객체
var str = 'abc def';

var realArr = [1, 2, 3]
var arr1 = Array.from(obj)

console.log(arr1, typeof arr1)

var arr2 = Array.from(str);
console.log(arr2, typeof arr2)

/**
 * 데이터 타이블 배열로 변경하는 'Array.from'메서드 도입! (ES6 부터)
 */