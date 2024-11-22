import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import Mission from "../models/missions";
import dotenv from "dotenv";

dotenv.config();
const missionsRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI!);

const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

// GET /missions - Get all missions or filter by missionName and/or min-landings
missionsRouter.get("/missions", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const query: any = {};
    if (req.query.missionName) {
      query.missionName = req.query.missionName as string;
    }
    if (req.query["min-landings"]) {
      query.successfulLandings = { $gte: parseInt(
        req.query["min-landings"] as string, 10) };
    }

    const missions = await collection.find(query).toArray();
    res.status(200).json(missions);
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// GET /missions/find/:id - Get a mission by ID
missionsRouter.get("/missions/find/:id", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const mission = await collection.findOne(
      { _id: new ObjectId(req.params.id) });
    if (!mission) {
      res.status(404).send("Mission not found");
    } else {
      res.status(200).json(mission);
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// POST /missions - Add a new mission
missionsRouter.post("/missions", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const newMission: Mission = req.body;
    const result = await collection.insertOne(newMission);
    res.status(201).json({ _id: result.insertedId, ...newMission });
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// PUT /missions/:id - Update a mission by ID
missionsRouter.put("/missions/:id", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      res.status(404).send("Mission not found");
    } else {
      const updatedMission = await collection.findOne(
        { _id: new ObjectId(req.params.id) });
      res.status(200).json(updatedMission);
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// DELETE /missions/:id - Delete a mission by ID
missionsRouter.delete("/missions/:id", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const result = await collection.deleteOne(
      { _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      res.status(404).send("Mission not found");
    } else {
      res.status(204).send();
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// PATCH /missions/:id - Partially update mission fields
missionsRouter.patch("/missions/:id", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const updateFields = req.body;
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: updateFields }
    );

    if (result.matchedCount === 0) {
      res.status(404).send("Mission not found");
    } else {
      const updatedMission = await collection.findOne(
        { _id: new ObjectId(req.params.id) });
      res.status(200).json(updatedMission);
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// PATCH /missions/:id/land - Increment successfulLandings by a specified number
missionsRouter.patch("/missions/:id/land", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const increment = req.body.successfulLandings || 0;
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $inc: { successfulLandings: increment } }
    );

    if (result.matchedCount === 0) {
      res.status(404).send("Mission not found");
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

// GET /missions/least-landings - Get the mission with the fewest successful landings
missionsRouter.get("/missions/least-landings", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db().collection<Mission>("missions");

    const leastLandedMission = await collection
      .find()
      .sort({ successfulLandings: 1 })
      .limit(1)
      .toArray();

    if (leastLandedMission.length === 0) {
      res.status(404).send("No missions found");
    } else {
      res.status(200).json(leastLandedMission[0]);
    }
  } catch (error) {
    errorResponse(error, res);
  } finally {
    await client.close();
  }
});

export default missionsRouter;