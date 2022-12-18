const express = require("express");
const router = express.Router();
const ProductControl = require('../controllers/Productcontrol')
const {protect} = require('../middleware/Auth')

router.post('/create',protect,ProductControl.CreateProduct)


module.exports = router;
