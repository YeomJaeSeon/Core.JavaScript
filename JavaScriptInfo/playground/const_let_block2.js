let a = Math.ceil(Math.random() * 3); // 0 ~ 2.999...
switch (a) {
  case 1: {
    let b = 10;
    console.log(a + b);
    break;
  }
  case 2: {
    let b = 20;
    console.log(a + b);
  }
  case 3: {
    let b = 30;
    console.log(a + b);
  }
}
console.log(`a: ${a}, b: ${b}`);
