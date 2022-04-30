var a = 10; // number로 타입지정하지않아도, number타입으로 추론됨
var c = 'abc';
function getB(b) {
    if (b === void 0) { b = 10; }
    console.log(b);
    return b;
}
getB();
