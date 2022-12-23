const express = require("express")
const router = express.Router();
const UserControl = require('../controllers/Usercontrol')

router.post('/new', UserControl.Registertion)
router.get('/get', UserControl.Getallusers)
router.get('/:UserID', UserControl.GetOneuser)
router.put('/:UserID', UserControl.UpdateUser)
router.post('/loging', UserControl.Login)
router.delete('/:UserID', UserControl.DeleteUser)
router.put('/role/:UserID', UserControl.UpdateRole)
module.exports = router