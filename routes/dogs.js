const express = require('express');
const router = express.Router();

const dogController = require('../controllers/dogs');
const validation = require('../middleware/validate');

router.get('/', dogController.getAll);

router.get('/:id', dogController.getSingle);

router.post('/', validation.saveDog, dogController.createDog);

router.put('/:id', validation.saveDog, dogController.updateDog);

router.delete('/:id', dogController.deleteDog);

module.exports = router;