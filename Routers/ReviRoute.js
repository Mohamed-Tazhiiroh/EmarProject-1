const express = require('express')
const router = express.Router()
const Reviews = require('../controllers/Reaviwes')


router.post('/Newreviews', Reviews.CreateRive)
router.put('/Update/:Rev_id', Reviews.UpdateReviws)




module.exports = router