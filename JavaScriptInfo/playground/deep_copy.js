import _ from 'lodash'

const user = {
    name: 'John',
    sizes: {
        height: 182,
        width: 50
    }
}
let clone = Object.assign({}, user);

console.log(user.sizes === clone.sizes)

// deep copy, 모든 프로퍼티 새롭게 복사.
const cloneResult = _.cloneDeep(user); //deep copy됨

console.log(cloneResult)
console.log(user.sizes === cloneResult.sizes)


const obj = {
    name: 'yeom',
    age: 25,
    bestFriend: {
        name: 'Teddy',
        age: 26,
        gender: 'male'
    }
}

const clone2 = Object.assign({}, obj);
obj.bestFriend.age = 100;
console.log('과연', clone2.bestFriend.age === 100) // true