// 타입추론 기본 1
var a = 10; // number로 타입지정하지않아도, number타입으로 추론됨

var c = 'abc'

function getB(b = 10){
    console.log(b)
    var c = 'hi';

    return b + c;   //string으로 타입추론  
}
getB()

// 타입 추론 기본 2
// interface Dropdown<T>{
//     value: T
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 't셔츠',
//     title: 'skt'
// }

//타입 추론 기본 3
interface Dropdown<T>{
    value: T
    title: string;
}

interface DetailedDropdown<T> extends Dropdown<T>{
    description: string;
    tag: T;
}
var detailedItem: DetailedDropdown<number> = {
    description: 'description',
    tag: 10,
    value: 20,
    title: 'title'
}
var shoppiengItem: Dropdown<string> = {
    value: 't셔츠',
    title: 'skt'
}

// Best Common Type
var arr = [1, 2, 3]
var arr4 = [1, 2, true]
var arr2 = [1, 2, true];
var arr3 = [null, 'hi', true, false, undefined]