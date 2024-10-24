
const products = [
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
    },
];

const calcAverageProductPrice = (products) => {
    let avePrice = {price: 0, name: ""};
    for(let i = 0; i < products.length; i++){
        avePrice += products
    }
    return avePrice
}

console.log(calcAverageProductPrice())







