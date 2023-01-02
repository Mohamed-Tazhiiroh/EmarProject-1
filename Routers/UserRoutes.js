const express = require("express")
const router = express.Router();
const UserControl = require('../controllers/Usercontrol')
const { protect } = require("../middleware/Auth");

router.post('/new', UserControl.Registertion)
router.get('/get', UserControl.Getallusers)
// router.delete('/All', UserControl.DeleteAll)
router.get('/:UserID', UserControl.GetOneuser)
router.put('/:UserID', UserControl.UpdateUser)
router.post('/loging', UserControl.Login)
router.delete('/:UserID', UserControl.DeleteUser)
router.put('/role/:UserID', protect, UserControl.UpdateRole)
module.exports = router