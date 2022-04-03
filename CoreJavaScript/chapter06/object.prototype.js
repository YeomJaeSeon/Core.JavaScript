Object.prototype.getEntries = function () {
  //   console.log(this);
  var res = [];
  for (var prop in this) {
    if (this.hasOwnProperty(prop)) {
      //hasOwnPropery는 Object.prototype의 프로퍼티인데, 모두다 접근할수있다. 왜냐면 Object.prototype은 프로토타입 체인의 최상단에 있기 때문에(왜? prototype이라는 객체는 Object.prototype을 참조하기에, 정확힌 prototype.__proto__가 Object.prototype을 참조)
      res.push([prop, this[prop]]);
    }
  }

  return res;
};

var data = [
  ["object", { a: 1, b: 2, c: 3 }],
  ["number", 345],
  ["string", "abc"],
  ["boolean", false],
  ["funct", function () {}],
  ["array", [1, 2, 3]],
];

data.forEach(function (datum) {
  console.log(datum[1].getEntries());
});

//모든 데이터 타입이 Object.prototype에 접근할수있기에 객체전용 메서드를 만드려면 prototype에 메서드를 추가하면 안된다.

//Object prototype은 프로토타입 체인의 최상단에 있기에 모든 데이터타입이 접근할수 있다. 그래서 Object.prototype에는 범용적인 메서드, 프로퍼티들밖에 없다.
console.log(Object.prototype);

//Object.prototype에 접근할수 없게 만드는 방법: Object.create(null)
var _proto = Object.create(null);
_proto.getValue = function (key) {
  return this[key];
};

var obj = Object.create(_proto);
obj.a = 1;
console.log(obj.getValue("a"));
console.dir(obj);

//obj의 __proto__에는 Object.prototype의 built in(기본으로 내장된) 프로퍼티나 메서드들이 없다. 즉, 필요한 프로퍼티나 메서드만존재하는 가벼운 객체이다.ㄴ

/**
 * Object.prototype은 프로토타입 체인의 최상단 객체이다. 즉 모든 데이터 타입이 Object.prototype에 접근할수있다. 그래서 Object.prototype에는
 * 범용적인 메서드들이있고 Object전용 메서드는 static하게있다. (Object.~들은 Object전용, Object.prototype.~는 범용적)
 *
 * 프로토타입 체인: __proto__ -> __proto__ -> __proto__로 찾는것, 찾으면 검색중단
 * 가까운대상 -> 먼 대상 으로 찾는다.
 */
