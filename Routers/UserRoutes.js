const express = require("express")
const  router = express.Router();
const UserControl =require ('../controllers/Usercontrol')

router.post('/new', UserControl.Registertion)


module.exports=router