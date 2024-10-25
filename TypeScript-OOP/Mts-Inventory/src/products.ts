
export interface Product {
    
    name: string,
    price: number
}

const products: Product[] = [
    {
        name: "Bread",
        price: 2.99
    },
    {
        name: "Cheese",
        price: 3.49
    },
    {
        name: "Ham",
        price: 3.99
    }
];

export const calcAverageProductPrice = (products: Product[]) => {
    if (products.length === 0) return 0;
    
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    return totalPrice / products.length;
    
}

console.log(calcAverageProductPrice(products));






