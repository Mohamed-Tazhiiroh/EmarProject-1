const express = require("express")
const router = express.Router();
const CateControle = require('../controllers/Category');
const { protect } = require("../middleware/Auth");


router.post('/new', protect, CateControle.CreateCategory)
router.get("/Getall", CateControle.GetallCategory)
router.get('/:Cat_ID', CateControle.GetOneCAte)
router.put('/:cat_ID', CateControle.UpdateCategory)
router.delete('/:Cat_ID', CateControle.Deletecategry)

module.exports = router