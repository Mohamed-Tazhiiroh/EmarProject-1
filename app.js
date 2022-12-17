const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json())

const port = process.env.port || 4000

const UserRouters = require("./Routers/UserRoutes")
app.use('/api/user', UserRouters)





app.listen(port, () => console.log(`Server Is Running On port ${port}`))