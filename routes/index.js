const router = require('express').Router();
router.use('/', require('./swagger'));

router.get('/', (req, res)=> {
    //#swagger.tags-['Hello World']
    res. send('Hello World');
});

router.use('/dogs', require('./dogs'));
router.use('/springs', require('./springs'));


module.exports = router;