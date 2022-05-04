interface IPerson{
    name: string;
}
interface IDeveloper{
    name: string;
    skill: string;
}
let p: IPerson;
let d: IDeveloper;

p = d;
// d = p;

class H{
    name: string
    // skill: string;
    hello(a: string): void{}
}
class T{
    name: string;
    // skill: string;
    hello(a: string): void{}
}

let h: T;
h = new H();

let printOne = function(a: string){

}
let printTwo = function(a: string, b: string){

}
// printOne = printTwo;
// printTwo = printOne

interface ItemA<T>{
    data: T
}
interface ItemB<T>{
    data: T
}

