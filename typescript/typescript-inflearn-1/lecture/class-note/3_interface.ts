interface User{
    age: number;
    name: string
}

var seho: User = {
    age: 10,
    name: "세호"
}

interface CraftBeer{
    brand?: number;
    [propName: string]: number; //
}

function brewBeer(beer: CraftBeer){
    console.log(beer.brand)
    console.log(beer.brandon)
}

let myBeer = {brandon: 100}
brewBeer(myBeer)

