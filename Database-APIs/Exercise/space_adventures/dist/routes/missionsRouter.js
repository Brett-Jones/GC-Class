"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const missionsRouter = express_1.default.Router();
const client = new mongodb_1.MongoClient(process.env.MONGODB_URI);
const errorResponse = (error, res) => {
    console.error("FAIL", error);
    res.status(500).json({ message: "Internal Server Error" });
};
// GET /missions - Get all missions or filter by missionName and/or min-landings
missionsRouter.get("/missions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const query = {};
        if (req.query.missionName) {
            query.missionName = req.query.missionName;
        }
        if (req.query["min-landings"]) {
            query.successfulLandings = { $gte: parseInt(req.query["min-landings"], 10) };
        }
        const missions = yield collection.find(query).toArray();
        res.status(200).json(missions);
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// GET /missions/find/:id - Get a mission by ID
missionsRouter.get("/missions/find/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const mission = yield collection.findOne({ _id: new mongodb_1.ObjectId(req.params.id) });
        if (!mission) {
            res.status(404).send("Mission not found");
        }
        else {
            res.status(200).json(mission);
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// POST /missions - Add a new mission
missionsRouter.post("/missions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const newMission = req.body;
        const result = yield collection.insertOne(newMission);
        res.status(201).json(Object.assign({ _id: result.insertedId }, newMission));
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// PUT /missions/:id - Update a mission by ID
missionsRouter.put("/missions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const result = yield collection.updateOne({ _id: new mongodb_1.ObjectId(req.params.id) }, { $set: req.body });
        if (result.matchedCount === 0) {
            res.status(404).send("Mission not found");
        }
        else {
            const updatedMission = yield collection.findOne({ _id: new mongodb_1.ObjectId(req.params.id) });
            res.status(200).json(updatedMission);
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// DELETE /missions/:id - Delete a mission by ID
missionsRouter.delete("/missions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const result = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(req.params.id) });
        if (result.deletedCount === 0) {
            res.status(404).send("Mission not found");
        }
        else {
            res.status(204).send();
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// PATCH /missions/:id - Partially update mission fields
missionsRouter.patch("/missions/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const updateFields = req.body;
        const result = yield collection.updateOne({ _id: new mongodb_1.ObjectId(req.params.id) }, { $set: updateFields });
        if (result.matchedCount === 0) {
            res.status(404).send("Mission not found");
        }
        else {
            const updatedMission = yield collection.findOne({ _id: new mongodb_1.ObjectId(req.params.id) });
            res.status(200).json(updatedMission);
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// PATCH /missions/:id/land - Increment successfulLandings by a specified number
missionsRouter.patch("/missions/:id/land", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const increment = req.body.successfulLandings || 0;
        const result = yield collection.updateOne({ _id: new mongodb_1.ObjectId(req.params.id) }, { $inc: { successfulLandings: increment } });
        if (result.matchedCount === 0) {
            res.status(404).send("Mission not found");
        }
        else {
            res.status(200).json({ success: true });
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
// GET /missions/least-landings - Get the mission with the fewest successful landings
missionsRouter.get("/missions/least-landings", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const collection = client.db().collection("missions");
        const leastLandedMission = yield collection
            .find()
            .sort({ successfulLandings: 1 })
            .limit(1)
            .toArray();
        if (leastLandedMission.length === 0) {
            res.status(404).send("No missions found");
        }
        else {
            res.status(200).json(leastLandedMission[0]);
        }
    }
    catch (error) {
        errorResponse(error, res);
    }
    finally {
        yield client.close();
    }
}));
exports.default = missionsRouter;
