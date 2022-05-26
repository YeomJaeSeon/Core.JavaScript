let user = {
    name: 'yeomjaeseon'
}

let map = new Map();
map.set(user, 'user');

user = null

for(let key of map.keys()){
    console.log(key); // { name : 'yeomjaeseon' }
}
console.log(user)
console.log(map.size)
console.log(map.has(user))
console.log(map.get(user))