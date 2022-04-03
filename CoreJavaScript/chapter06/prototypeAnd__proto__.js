var Constructor = function (name){
    this.name = name;
}

Constructor.prototype.method1 = function () {
}
Constructor.prototype.property1 = 'Constructor Prototype Property'

var instance = new Constructor('Instance');
console.dir(Constructor)
console.dir(instance)
//크롬개발자도구창에서하는게 더 보기좋네.