const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags-['Springs']
    const result = await mongodb.getDatabase().db().collection('fl_springs').find();
    result.toArray().then((springs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(springs);
    });
};
const getSingle = async (req, res) => {
    //#swagger.tags-['Springs']
    const springId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('fl_springs').find({_id: springId});
    result.toArray().then((springs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(springs[0]);
    });
};

const createSpring = async (req, res) => {
    //#swagger.tags-['Springs']
    const spring = {
        name: req.body.name,
        fees: req.body.fees,
        county: req.body.county
    };
    const response = await mongodb.getDatabase().db().collection('fl_springs').insertOne(spring);
    if (response.acknowledged){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred creating the spring.');
    }
};

const updateSpring = async (req, res) => {
    //#swagger.tags-['Springs']
    const springId = new ObjectId(req.params.id);
    const spring = {
        name: req.body.name,
        fees: req.body.fees,
        county: req.body.county
    };
    const response = await mongodb.getDatabase().db().collection('fl_springs').replaceOne({_id: springId}, spring);
    if (response.modifiedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred updating the spring.');
    }
};

const deleteSpring = async (req, res) => {
    //#swagger.tags-['Springs']
    const springId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('fl_springs').deleteOne({_id: springId});
    if (response.deletedCount > 0){
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred deleting the spring.');
    }
}


module.exports = {
    getAll,
    getSingle,
    createSpring,
    updateSpring,
    deleteSpring    
};