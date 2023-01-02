const express = require('express')
const router = express.Router()
const Reviews = require('../controllers/Reaviwes')


router.post('/Newreviews', Reviews.CreateRive)




module.exports = router