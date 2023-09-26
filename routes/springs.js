const express = require('express');
const router = express.Router();

const springsController = require('../controllers/springs');

router.get('/', springsController.getAll);

router.get('/:id', springsController.getSingle);

router.post('/', springsController.createSpring);

router.put('/:id', springsController.updateSpring);

router.delete('/:id', springsController.deleteSpring);

module.exports = router;