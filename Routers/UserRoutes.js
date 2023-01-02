const express = require("express")
const router = express.Router();
const UserControl = require('../controllers/Usercontrol')
const { protect } = require("../middleware/Auth");

router.post('/new', UserControl.Registertion)
router.get('/get', UserControl.Getallusers)
router.get('/:UserID', UserControl.GetOneuser)
router.put('/ChangingRole', protect, UserControl.UpdateRole)
router.put('/:UserID', UserControl.UpdateUser)
router.post('/loging', UserControl.Login)
router.delete('/:UserID', UserControl.DeleteUser)
module.exports = router