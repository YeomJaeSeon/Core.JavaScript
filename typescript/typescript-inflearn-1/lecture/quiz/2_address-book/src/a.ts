function fetchItems() {
  let items = ['a', 'b', 'c'];
  return items;
}

// 동기적인 코드는 타입추론이 된다.

const result = fetchItems();
console.log(result);

// 비동기 반환하는 함수는 응답 타입형식을 알 수가 없다.
function AsynchronousFetchItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];

  return new Promise(function (resolve, reject) {
    resolve(items);
  });
}
// 비동기적인 코드는 타입추론이 안된다. 직접 타입을 명시해줘야한다. resolve되는 타입 명시하지않으면 unknown 이다.
AsynchronousFetchItems();
