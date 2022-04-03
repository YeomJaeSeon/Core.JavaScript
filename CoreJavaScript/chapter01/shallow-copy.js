// copyObject 함수는 새로운 객체를 생성하여 불변성을 지켜주지만 (primitive type과 같게)
// shallow copy로 한단계 아래 프로퍼티만 복사한다. 그렇기에 user.urls의 주소만 복사하기에 user.urls 오브젝트의 프로퍼티는 항상 같은 값을 가르킨다.
// user.urls 객체에 대해서도 불변값을 지켜주면 끝!
var copyObject = function(target){
    var result = {};
    for(var prop in target){
        result[prop] = target[prop];
    }

    return result;
}

var user = {
    name: 'JaeSeon',
    urls: {
        portpolio: 'www.yeom-portpolio.com',
        blog: 'blog.com',
        facebook: 'facebook.com'
    }
}

var user2 = copyObject(user)

user2.name = 'Jung'
console.log(user.name === user2.name)

user.urls.portpolio = 'another_portpolio.com';
console.log(user.urls.portpolio === user2.urls.portpolio)

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog)

console.log(user)
console.log(user2)

user2 = copyObject(user);
user2.urls = copyObject(user.urls) // user.urls의 중첩객체도 불변객체로 만들었다..

user.urls.portpolio = 'poppo.com';
console.log(user.urls.portpolio === user2.urls.portpolio)

user2.urls.blog = 'tistory';
console.log(user.urls.blog === user2.urls.blog)