type Heroes = 'Hulk' | 'Capt' | 'Thor'

type HeroAges = { [K in Heroes]: number } // [K in Heroes]: Heroes의 타입 순회한다.
const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
}

// for in - 객체의 키 순회하는 반복문을 이용. 이것에서 착안한 맵드타입

type MyItem = { a: string, b: number, c: boolean}

type T1 = { [K in 'x' | 'y']: K }
const t1: T1 = {
    x: 'x',
    y: 'y'
}

type T2 = { [P in 'x' | 'y']: number }
const t2:T2 = {
    x: 1,
    y: 2
}

type T3 = { [P in 'a' | 'b']: MyItem[P] }
const t3: T3 = {
    a: 'hello',
    b: 10
}

type T4 = { [P in keyof MyItem]: Date }
const t4:T4 = {
    a: new Date(),
    b: new Date(),
    c: new Date()
}

type T5 = { [P in keyof MyItem]:MyItem[P] }

type T6 = { readonly[P in keyof MyItem]:MyItem[P] }

type T7 = { [P in keyof MyItem]: Array<MyItem[P]> }
const t7: T7 = {
    a: ['1', '2', 'hello'],
    b: [1, 2, 3],
    c: [true, false]
}

// 맵드 타입

type TPerson = {
    name: string,
    age: number
}

// type NameOfPersonType = { [P in 'name']: TPerson[P] }
type NameOfPersonType = { [P in 'name']: TPerson[P] }
type SamePersonType = { [P in keyof TPerson]: TPerson[P] }
type AllPropertyBooleanType = { [P in keyof TPerson]: boolean }

interface Furniture{
    price: number;
    name:string;
    isSoldOut: boolean
}

type PriceType = { [P in 'price']: Furniture[P] }

type SameFurnitureType = { [P in keyof Furniture]:Furniture[P] }