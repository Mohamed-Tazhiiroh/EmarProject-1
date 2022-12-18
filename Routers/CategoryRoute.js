const express = require("express")
const router = express.Router();
const CateControle = require('../controllers/Category');


router.post('/new', CateControle.CreateCategory)
router.get("/Getall", CateControle.GetallCategory)
router.get('/:Cat_ID', CateControle.GetingOneData)
router.put('/:cat_ID', CateControle.UpdateCategory)
router.delete('/:Cat_ID', CateControle.Delete)

module.exports = router