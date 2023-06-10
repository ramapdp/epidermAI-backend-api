var express = require('express');
const Medicine = require('../models/Medicine');
const Disease = require('../models/Disease');
const Disease_Medicine = require('../models/Disease_Medicine');
var router = express.Router();

/* GET all medicines. */
router.get('/medicines', async (req, res) => {
  const medicines = await Medicine.findAll();

  return res
    .status(200)
    .json(medicines);
});

/* GET all diseases. */
router.get('/diseases', async (req, res) => {
  // const diseases = await Disease.findAll();

  return res
    .status(200)
    .json(diseases);
});

module.exports = router;
