var express = require('express');
var router = express.Router();
const models = require('../models')
const DiseaseController = require('../controller/DiseaseController')


const Disease = models.disease_details;
const Medicine = models.medicine_details;

/* GET all diseases. */
router.get('/diseases', DiseaseController.getAllDiseases);

/* GET all medicines. */
router.get('/medicines', DiseaseController.getAllMedicines);

/* GET disease detail. */
router.get('/diseases/:name', DiseaseController.getDeaseseDetails);

/* GET medicine detail. */
router.get('/medicines/:name', DiseaseController.getMedicineDetails);

/* GET disease prediction wih medicine recommendation. */
router.get('/predict/:name', DiseaseController.getDeasesePrediction);

module.exports = router;
