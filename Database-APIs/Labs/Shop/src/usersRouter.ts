
import express, { query } from "express";
import {MongoClient, ObjectId } from "mongodb";
import User from "./users";
import dotenv from "dotenv";

dotenv.config();
const usersRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI!);

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json( {message: "Internal Server Error"} );
};

usersRouter.get("/user/find/:id", async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<User>("user");;

        const users = await collection.findOne({ _id: new ObjectId(req.params.id) });

        if (!users) {
            res.status(404).send("Mission not found");
          } else {
            res.status(200).json(users);
          }

    } catch (error) {
        errorResponse(error, res);
    } finally {
        await client.close();
    }
})

usersRouter.post("/missions", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<User>("users");
  
      const newUsers: User = req.body;
      const result = await collection.insertOne(newUsers);
      res.status(201).json({ _id: result.insertedId, ...newUsers });
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });

  usersRouter.put("/users/:id", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<User>("users");
  
      const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );
  
      if (result.matchedCount === 0) {
        res.status(404).send("User not found");
      } else {
        const updatedUser = await collection.findOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(updatedUser);
      }
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });

  usersRouter.delete("/users/:id", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<User>("users");
  
      const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  
      if (result.deletedCount === 0) {
        res.status(404).send("User not found");
      } else {
        res.status(204).send();
      }
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });







