var outer = function (){
    var a = 1;
    var inner = function () {
        return ++a;
    }
    return inner;
}

var ou