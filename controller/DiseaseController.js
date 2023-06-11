const models = require('../models');
const { disease_details, medicine_details } = require('../models')

const Disease = models.disease_details;
const Medicine = models.medicine_details;

const getAllDiseases = async (req, res) => {
   const diseases = await Disease.findAll({
      attributes: ['id', 'dss_name', 'dss_img']
   });
  
    return res.json({
      status: 200,
      message: "Success get all diseases data",
      data: diseases
    });
};

const getAllMedicines = async (req, res) => {
   const medicines = await Medicine.findAll({
      attributes: ['id', 'mdc_name', 'mdc_img']
   });
  
    return res.json({
      status: 200,
      message: "Success get all medicines data",
      data: medicines
    });
};

const getDeaseseDetails = async (req, res) => {
   const name =  req.params.name;

   const disease = await Disease.findOne({ where: { dss_name: name },
      include: {
         model: medicine_details,
         as: 'medicine_details',
         attributes: ['mdc_name', 'mdc_desc', 'mdc_img'],
         through: {attributes: []}
      }});

   return res.json({
      status: 200,
      message: "Success get disease details by name",
      data: disease
    });
};

const getMedicineDetails = async (req, res) => {
   const name =  req.params.name;

   const medicine = await Medicine.findOne({ where: { mdc_name: name }});

   return res.json({
      status: 200,
      message: "Success get medicine details by name",
      data: medicine
    });
};

const getDeasesePrediction = async (req, res) => {
   const name =  req.params.name;

   const disease = await Disease.findOne({ 
      where: { dss_name: name },
      include: {
         model: medicine_details,
         as: 'medicine_details',
         attributes: ['mdc_name', 'mdc_desc', 'mdc_img'],
         through: {attributes: []}
      }
   });

   return res.json({
      status: 200,
      message: "Success get disease prediction data with medicine recommendation",
      data: disease
    });
};

module.exports = {
   getAllDiseases,
   getAllMedicines,
   getDeaseseDetails,
   getMedicineDetails,
   getDeasesePrediction
}