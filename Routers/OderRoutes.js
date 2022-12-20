const express = require('express');
const router = express.Router();
const OdersControls = require('../controllers/Orders');
const { protect } = require('../middleware/Auth');

router.post('/Createoders', protect, OdersControls.CreateOders)
router.get('/getall', OdersControls.Getallorders)
router.put('/:Ored_id', OdersControls.UpdateOrders)
router.get('/:Ored_id', OdersControls.Getoneorders)

module.exports = router