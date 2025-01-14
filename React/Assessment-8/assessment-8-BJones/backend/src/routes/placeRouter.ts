// require the express module
import express from "express";
import { ObjectId } from "mongodb";
import Place from "../models/Place";

const placeRouter = express.Router();

const places: Place[] = [
  { _id: new ObjectId(), name: "Cancun", firstTime: true },
  { _id: new ObjectId(), name: "Florida", firstTime: false },
  { _id: new ObjectId(), name: "Tulum", firstTime: true },
  { _id: new ObjectId(), name: "Banff", firstTime: true },
];

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

placeRouter.get("/places", async (req, res) => {
  try {
    res.status(200).json(places);
  } catch (err) {
    errorResponse(err, res);
  }
});

placeRouter.get("/places/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const result: Place | undefined = places.find((item) =>
      item._id?.equals(_id)
    );
    if (result) {
      res.status(200);
      res.json(result);
    } else {
      res.status(404).send(`Place not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

placeRouter.post("/places", async (req, res) => {
  try {
    const newPlace: Place = req.body;
    newPlace._id = new ObjectId();
    places.push(newPlace);
    res.status(201).json(newPlace);
  } catch (err) {
    errorResponse(err, res);
  }
});

placeRouter.put("/places/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const place: Place = req.body;
    const index: number = places.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      places[index] = place;
      res.status(200);
      res.json(place);
    } else {
      res.status(404);
      res.send(`Place not found`);
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

placeRouter.delete("/places/:id", async (req, res) => {
  try {
    const _id: ObjectId = new ObjectId(req.params.id);
    const index: number = places.findIndex((item) => item._id?.equals(_id));
    if (index !== -1) {
      places.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.status(404);
      res.send("Place not found");
    }
  } catch (error) {
    errorResponse(error, res);
  }
});

export default placeRouter;
