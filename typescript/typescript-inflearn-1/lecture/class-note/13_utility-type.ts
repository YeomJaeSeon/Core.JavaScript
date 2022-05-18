interface Product{
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// function fetchProducts():Promise<Product[]>{

// }

interface ProductDetail{
    id: number;
    name: string;
    price: number;
}

interface Person{
    name: string;
    age: number;
}

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem){

}

type PartialShopping = Partial<Product>;
function getProductDetail(item: PartialShopping): PartialShopping{
    return {}
}

type OmitShopping = Omit<Product, 'id' | 'name'>;

// interface UpdateProduct{
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
//Partial 유틸리티 타입 이용
type UpdateProduct = Partial<Product>

function updateProductItem(productItem: UpdateProduct){
    // p
}

// 유틸리티 타입을 실제로 구현해보자.
// Partial 구현
interface UserProfile{
    username: string;
    email: string;
    profilePhotoUrl: string;
}



// interface UserProfileUpdate{
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }


// #1
type UserProfileUpdate = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// #2 - 맵드 타입..?
type UserProfileUpdate2 = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p] // 맵드타입
}

type UserProfileKeys = keyof UserProfile

// #3
type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
// Partial랑 똑같다.
type Subset<T> = {
    [p in keyof T]?: T[p];
}

type UserProfileUpdate4 = Subset<UserProfile>

type Item = {
    name: string;
    id: number;
    isSoldOut: boolean
}

type ItemName = Pick<Item, 'id'>

enum Gender {
    MALE,
    FEMALE
}
type Animal = {
    name: string;
    age: number;
    gender:Gender
}

// Partial 구현해보기
//#1
type PartialAnimal1 = {
    name?: Animal['name']; // 이렇게 타입의 프로퍼티에 접근하는건, 오브젝트의 프로퍼티에 접근하는 것과 같구나.(대괄호 표기법)
    age?: Animal['age']; // 점표기법은 안되네
    gender?:Animal['gender']
}

const pet1:PartialAnimal1 = {
    name: '키티'
}

// #2 mapped type이용
type PartialAnimal2 = {
    [t in 'name' | 'age' | 'gender']?: Animal[t]
}

const pet2: PartialAnimal2 = {
    name: '키티'
}

// #3 keyof 이용
type PartialAnimal3 = {
    [t in keyof Animal]?: Animal[t]
}
const pet3:PartialAnimal3 = {
    name: '키티'
}

// #4 generic
type MyPartial1<T> = {
    [p in keyof T]?: T[p]
}

type PartialAnimal4 = MyPartial1<Animal>
const pet4:PartialAnimal4 = {
    name: '키티'
}

// Pick구현
type Goal1 = Pick<Animal, 'name'>
const pet5:Goal1 = {
    name: '안녕'
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

const pet6:MyPick<Animal, 'name'> = {
    name: '안녕'
}