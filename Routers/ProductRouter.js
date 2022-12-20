const express = require("express");
const router = express.Router();
const ProductControl = require('../controllers/Productcontrol')
const { protect } = require('../middleware/Auth')

router.post('/create', protect, ProductControl.CreateProduct)
router.put('/:Pro_id', ProductControl.UpdateProducts)
router.get('/:Pro_id', ProductControl.GetoneProdut)
router.get('/Get', ProductControl.Getallproduct)
router.delete('/:Pro_id', ProductControl.Deletepro)

module.exports = router;
