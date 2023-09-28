const express = require('express');
const router = express.Router();

const springsController = require('../controllers/springs');
const validation = require('../middleware/validate');

router.get('/', springsController.getAll);

router.get('/:id', springsController.getSingle);

router.post('/', validation.saveSpring, springsController.createSpring);

router.put('/:id', validation.saveSpring, springsController.updateSpring);

router.delete('/:id', springsController.deleteSpring);

module.exports = router;