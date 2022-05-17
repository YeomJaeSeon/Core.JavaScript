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