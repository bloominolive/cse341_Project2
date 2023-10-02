const express = require('express');
const router = express.Router();

const springsController = require('../controllers/springs');
const validation = require('../middleware/validate');

const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', springsController.getAll);

router.get('/:id', springsController.getSingle);

router.post('/', validation.saveSpring, isAuthenticated, springsController.createSpring);

router.put('/:id', validation.saveSpring, isAuthenticated, springsController.updateSpring);

router.delete('/:id', isAuthenticated, springsController.deleteSpring);

module.exports = router;