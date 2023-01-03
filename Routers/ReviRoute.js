const express = require('express')
const router = express.Router()
const Reviews = require('../controllers/Reaviwes')


router.get('/:Rev_id', Reviews.getoneReviws)
router.post('/Newreviews', Reviews.CreateRive)
router.put('/Update/:Rev_id', Reviews.UpdateReviws)
router.delete('/Delte/:Rev_id', Reviews.DeleteReviws)
router.get('/Getall', Reviews.Getallreviws)




module.exports = router