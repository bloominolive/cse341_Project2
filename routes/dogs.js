const express = require('express');
const router = express.Router();

const dogController = require('../controllers/dogs');
const validation = require('../middleware/validate');

const { isAuthenticated } = require("../middleware/authenticate");


router.get('/', dogController.getAll);

router.get('/:id', dogController.getSingle);

router.post('/', validation.saveDog, isAuthenticated, dogController.createDog);

router.put('/:id', validation.saveDog, isAuthenticated, dogController.updateDog);

router.delete('/:id', isAuthenticated, dogController.deleteDog);

module.exports = router;