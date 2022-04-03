var fruits = ['apple', 'banana', 'peach']
var $ul = document.createElement('ul')

fruits.forEach(function(fruit){
    console.log(this);
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function (){
        console.log(this)
        alert('your choice is ' + fruit);
    })
    $ul.appendChild($li);
})

document.body.appendChild($ul)