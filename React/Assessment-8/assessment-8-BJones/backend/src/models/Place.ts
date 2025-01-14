import { ObjectId } from "mongodb";

export default interface Place {
  _id?: ObjectId;
  name: string;
  firstTime: boolean;
}
