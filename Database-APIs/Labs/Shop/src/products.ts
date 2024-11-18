
import { ObjectId } from "mongodb";

interface Product {
    //including id to avoid mongo yelling at us if id is used to search
    _id?: ObjectId;
    name: string;
    price: number;
    photoURL?: string;

}

export default Product;
