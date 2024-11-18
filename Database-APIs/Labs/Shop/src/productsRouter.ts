
import express, { query } from "express";
import {MongoClient, ObjectId } from "mongodb";
import Product from "./products";
import dotenv from "dotenv";

dotenv.config();
const productsRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI!);

const errorResponse = (error: any, res: any) => {
    console.error("FAIL", error);
    res.status(500).json( {message: "Internal Server Error"} );
};

productsRouter.get("/products", async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Product>("products");;

        const query: any = {}; 

            if (req.query.maxPrice) {
                query.maxPrice = req.query.maxPrice as string;
            }
            if (req.query.includes) {
                query.includes = req.query.includes as string;
            }
            if (req.query["min-limit"]) {
                query.limit = { $gte: parseInt(req.query["min-limit"] as string, 10) };
            }

            const products = await collection.find(query).toArray();

    } catch (error) {
        errorResponse(error, res);
    } finally {
        await client.close();
    }
})

productsRouter.get("/products/find/:id", async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Product>("products");;

        const product = await collection.findOne({ _id: new ObjectId(req.params.id) });

        if (!product) {
            res.status(404).send("Mission not found");
          } else {
            res.status(200).json(product);
          }

    } catch (error) {
        errorResponse(error, res);
    } finally {
        await client.close();
    }
})

productsRouter.post("/missions", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<Product>("products");
  
      const newProduct: Product = req.body;
      const result = await collection.insertOne(newProduct);
      res.status(201).json({ _id: result.insertedId, ...newProduct });
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });

productsRouter.put("/products/:id", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<Product>("products");
  
      const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );
  
      if (result.matchedCount === 0) {
        res.status(404).send("Product not found");
      } else {
        const updatedProduct = await collection.findOne({ _id: new ObjectId(req.params.id) });
        res.status(200).json(updatedProduct);
      }
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });

  productsRouter.delete("/products/:id", async (req, res) => {
    try {
      await client.connect();
      const collection = client.db().collection<Product>("products");
  
      const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
  
      if (result.deletedCount === 0) {
        res.status(404).send("Product not found");
      } else {
        res.status(204).send();
      }
    } catch (error) {
      errorResponse(error, res);
    } finally {
      await client.close();
    }
  });







    // try {
        // await client.connect();
    // } catch {

    // } finally {
        
    // }
