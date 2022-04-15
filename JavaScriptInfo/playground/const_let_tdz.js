console.log(value1);
// console.log(value2); // TDZ때문에 ReferenceError ES6에나온 const나 let은 선언전 접근하면 TDZ에 있기에 ReferenceError발생
// console.log(value3);

var value1 = function () {
  console.log('value1');
};

const value2 = function () {
  console.log('value2');
};

let value3 = function () {
  console.log('value3');
};
