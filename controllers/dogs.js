const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags-['dogs']
    const result = await mongodb.getDatabase().db().collection('dogs').find();
    result.toArray().then((dogs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dogs);
    });
};
const getSingle = async (req, res) => {
    //#swagger.tags-['dogs']
    const dogId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('dogs').find({_id: dogId});
    result.toArray().then((dogs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(dogs[0]);
    });
};

const createDog = async (req, res) => {
    //#swagger.tags-['dogs']
    const dog = {
        breed: req.body.breed,
        group: req.body.group,
        height: req.body.height,
        weight: req.body.weight,
        lifeExpectancy: req.body.lifeExpectancy,
        shedLevel: req.body.shedLevel,
        coatLength: req.body.coatLength,
        goodBoyLevel: req.body.goodBoyLevel
    };
    const response = await mongodb.getDatabase().db().collection('dogs').insertOne(dog);
    if (response.acknowledged){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred creating the dog.');
    }
};

const updateDog = async (req, res) => {
    //#swagger.tags-['dogs']
    const dogId = new ObjectId(req.params.id);
    const dog = {
        breed: req.body.breed,
        group: req.body.group,
        height: req.body.height,
        weight: req.body.weight,
        lifeExpectancy: req.body.lifeExpectancy,
        shedLevel: req.body.shedLevel,
        coatLength: req.body.coatLength,
        goodBoyLevel: req.body.goodBoyLevel
    };
    const response = await mongodb.getDatabase().db().collection('dogs').replaceOne({_id: dogId}, dog);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred updating the dog.');
    }
};

const deleteDog = async (req, res) => {
    //#swagger.tags-['dogs']
    const dogId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('dogs').deleteOne({_id: dogId});
    if (response.deletedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred deleting the dog.');
    }
}


module.exports = {
    getAll,
    getSingle,
    createDog,
    updateDog,
    deleteDog    
};