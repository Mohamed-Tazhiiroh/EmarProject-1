const express =require('express');
const router= express.Router();
const OdersControls =require('../controllers/Orders');
const { protect } = require('../middleware/Auth');

router.post('/Createoders',protect, OdersControls.CreateOders)

module.exports= router