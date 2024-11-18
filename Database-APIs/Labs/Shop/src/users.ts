
import { ObjectId } from "mongodb";

interface User {
    //including id to avoid mongo yelling at us if id is used to search
    _id?: ObjectId;
    displayName: string;
    photoURL?: string;
    darkTheme: boolean;
}

export default User;
