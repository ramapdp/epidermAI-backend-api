var express = require('express');
const models = require('../models')
var router = express.Router();

/* GET all medicines. */
router.get('/medicines', async (req, res) => {
  const medicine = await models.medicine_details.findAll({
    attributes: ['id','mdc_name', 'mdc_img']
  });

  return res.json({
    status: 200,
    message: "Success get all medicine data",
    data: medicine
  });
  
  // return res.json('success endpoint access');
});

/* GET all diseases. */
router.get('/diseases', async (req, res) => {
  const disease = await models.disease_details.findAll({
    attributes: ['id','dss_name', 'dss_img']
  });

  return res.json({
    status: 200,
    message: "Success get all disease data",
    data: disease
  });
});

module.exports = router;
