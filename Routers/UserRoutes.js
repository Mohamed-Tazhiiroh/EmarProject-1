const express = require("express")
const  router = express.Router();
const UserControl = require ('../controllers/Usercontrol')

router.post('/new', UserControl.Registertion)
router.get('/get', UserControl.Getallusers)
router.put('/:UserID', UserControl.UpdateUser)


module.exports=router