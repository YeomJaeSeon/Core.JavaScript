var Person = function(name){
    this.name = name;
}

Person.prototype.method = function (){
    console.log(`my name is ${this.name}`)
}

var p1 = new Person('사람');
p1.method()
var p1Proto = Object.getPrototypeOf(p1) //p1의 prototype 가져옴
var p2 = new Person.prototype.constructor('사람2'); //Person.protype.constructor === Person
console.log(Person.prototype.constructor === Person)
var p3 = new p1Proto.constructor('사람3');
console.log(p1Proto === Person.prototype, p1Proto === p3.__proto__)
var p4 = new p1.__proto__.constructor('사람4');
var p5 = new p1.constructor('사람5')

var persons = [p1, p2, p3, p4, p5]

persons.forEach(function (p){
    console.log(p, p instanceof Person)
})