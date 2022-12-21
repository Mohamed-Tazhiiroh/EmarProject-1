const express = require("express")
const router = express.Router();
const subcat = require('../controllers/subCategory')

router.post('/new', subcat.createsubcategory)
router.put('/:SubID', subcat.Updatesubcategory)
router.get('/:SubID', subcat.Getonesubcategory)
// router.put('/:UserID', UserControl.UpdateUser)
// router.post('/loging', UserControl.Login)
// router.delete('/:UserID', UserControl.DeleteUser)
module.exports = router