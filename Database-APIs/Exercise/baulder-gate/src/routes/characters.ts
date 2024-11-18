
import {Router} from "express";
import {MongoClient, ObjectId} from "mongodb";
import {Character} from "../models/characters";
import dotenv from 'dotenv';


dotenv.config();
const router = Router();
const client = new MongoClient(process.env.MONGOBD_URL!);

router.get('./character', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Character>('characters');
        const characters = await collection.find({})
        res.status(200).json(characters);

    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    } finally {
        await client.close();
    }
})


router.get('/character/search', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Character>('characters')

        const query: any = {};

        if (req.query.name) {
            query.name = { $regex: new RegExp(req.query.name as string, 'i') }
        }
        if (req.query.class) {
            query.name = { $regex: new RegExp(req.query.class as string, 'i') }
        }

        const characters = await collection.find(query).toArray();
        res.status(200).json(characters);

    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});

    } finally {

        await client.close();
    }
})

router.post('/characters', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Character>('characters');
        const newCharacter: Character = req.body;
        const result = await collection.insertOne(newCharacter);
        res.status(201).json( {_id: result.insertedId, ...newCharacter} );
    }
    catch{
        res.status(400).json( {message: 'Bad Request'} );
    } finally{
        await client.close();
    }

})

router.put('/characters/:id', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Character>('characters');
        const id = req.params.id;
        const updates = req.body;

        const result = await collection.updateOne(
            {_id: new ObjectId(id) },
            {$set: updates }
        )

        if (result.matchedCount === 0 ){
            res.status(404).json( { messgae: 'Character not found... make em with post'} );
        } else{
            res.status(404).json( { messgae: 'Character updated'} );
        }

    } catch (error) {
        res.status(400).json( {message: 'Bad Request'} );

    } finally{
        await client.close();
    }
})


router.delete('/characters/:id', async (req, res) => {
    try {
        await client.connect();
        const collection = client.db().collection<Character>('characters');
        const id = req.params.id;

        const result = await collection.deleteOne({_id: new ObjectId(id) })

        if (result.deletedCount === 0 ){
            res.status(404).json( { messgae: 'Character not found'} );
        } else{
            res.status(404).json( { messgae: 'Character Deleted'} );
        }

    } catch (error) {
        res.status(400).json( {message: 'Bad Request'} );

    } finally{
        await client.close();
    }
});


export default Router

