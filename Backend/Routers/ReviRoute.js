const express = require('express')
const router = express.Router()
const Reviews = require('../controllers/Reaviwes')


router.get('/Getall', Reviews.Getallreviws)
router.get('/:Rev_id', Reviews.getoneReviws)
router.post('/Newreviews', Reviews.CreateRive)
router.put('/Update/:Rev_id', Reviews.UpdateReviws)
router.delete('/:Rev_id', Reviews.DeleteReviws)





module.exports = router