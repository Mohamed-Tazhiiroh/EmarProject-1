const express = require("express")
const router = express.Router();
const subcat = require('../controllers/subCategory')

router.post('/new', subcat.createsubcategory)
router.put('/:SubID', subcat.Updatesubcategory)
router.get('/:SubID', subcat.Getonesubcategory)
router.delete('/:SubID',subcat.Deletesubcatgory)

module.exports = router