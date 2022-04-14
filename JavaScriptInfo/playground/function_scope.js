const age = 10

if(age < 18){
    let welcome = function(){
        console.log('안녕')
    }
}else{
    let welcome = function(){
        alert("안녕하세요!")
    }
}

welcome()