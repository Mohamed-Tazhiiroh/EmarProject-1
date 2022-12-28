const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json())
const port = process.env.port || 5000
//=================================================================>User Route
const UserRouters = require("./Routers/UserRoutes")
//=================================================================>Category Route
const CateGoryRouters = require('./Routers/CategoryRoute')
//=================================================================>Product Route
const productRouters = require('./Routers/ProductRouter')
//=================================================================>order Route
const oders = require('./Routers/OderRoutes')
//=================================================================>Subategory Route
const SubcatE = require('./Routers/SubcategoryRouter')
//=================================================================>Cart Route
const routecart = require('./Routers/cartRoute')


//=================================================================>User api
app.use('/api/user', UserRouters)
//=================================================================>category api
app.use('/api/Cg', CateGoryRouters)
//=================================================================>product api
app.use('/api/pro', productRouters)
//=================================================================>order api
app.use('/api/order', oders)
//=================================================================>subcategory  api
app.use('/api/Subcate', SubcatE)
//=================================================================>cart api
app.use('/api/cart', routecart)



app.listen(port, () => console.log(`Server Is Running On port ${port}`))