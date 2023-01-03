const express = require("express");
const router = express.Router();
const ProductControl = require('../controllers/Productcontrol')
const { protect } = require('../middleware/Auth')

router.post('/create', protect, ProductControl.CreateProduct)
router.put('/:Pro_id', protect, ProductControl.UpdateProducts)
router.get('/:Pro_id', ProductControl.GetoneProdut)
router.get('/Get', ProductControl.Getproduct)
router.delete('/:Pro_id', protect, ProductControl.Deletepro)

module.exports = router;
