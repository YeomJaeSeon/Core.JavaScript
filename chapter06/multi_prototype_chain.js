var Grade = function () {
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i];
  }
  this.length = args.length;
};

var g = new Grade(100, 80); // g.__proto__ -> Grade.prototype.__proto__ -> Object.prototype

console.log(g);
console.log(g.__proto__);
console.log(Grade.prototype.constructor);

Grade.prototype = []; //prototype이 바라보는대상을 Array 생성자 함수의 인스턴스로..!!

var g2 = new Grade(100, 80); // g2.__proto__ -> Grade.prototype.__proto -> Array.prototype.__proto -> Object.prototype
//프로토타입 체이닝 에서 이제 Array.prototype의 프로퍼티나 메서드들에 접근할수있다! g2는.. g는 못했지만!

console.log(g2);
console.log(g2.__proto__);
console.log(Grade.prototype.constructor);
g2.pop(); //가능
// console.log(g2);

/**
 * 인스턴스는 생략가능한 __proto__프로퍼티를 통해서 바로 생성자함수의 prototype의 프로퍼티에 접근할수있다.
 * 그런데 prototype은 객체이므로 prototype.__proto__또한 Object.prototype을 가르킨다.
 * 그런데 prototype이 바라보는 대상을 변경하면 프로토타입 체이닝할 프로토타입을 추가할수있다.
 *
 * 위 예제에선 Grade.prototype.__proto__ -> Array.prototype을 가르키게하여 인스턴스 g2는 프로토타입 체이닝을 통해 Array2.prototype의 프로퍼티나 메서드들을 참조할수있다.
 */
