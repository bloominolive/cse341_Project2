const validator = require('../helpers/validate');

const saveDog = (req, res, next) => {
  const validationRule = {
    breed: 'required|string',
    group: 'required|string',
    height: 'required|string',
    weight: 'required|string',
    lifeExpectancy: 'required|string',
    shedLevel: 'required|string',
    coatLength: 'required|string',
    goodBoyLevel: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveSpring = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        fees: 'required|string',
        county: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
    saveDog,
    saveSpring
};