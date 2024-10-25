
import {Product} from './products'

export interface InventoryItem {

    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] =[
    {
        product:{ name: "motor", price: 10.00},
        quantity: 10
    },
    {
        product:{ name: "sensor", price: 12.50},
        quantity: 4
    },
    {
        product:{ name: "LED", price: 1.00},
        quantity: 20
    }
];


export const calcInventoryValue = (inventory: InventoryItem[]) => {
    if(inventory.length === 0) return 0;

    const totalValue = inventory.reduce((sum, inventory) => 
        sum + (inventory.product.price * inventory.quantity), 0);
        return totalValue
}

console.log(calcInventoryValue(inventory));


