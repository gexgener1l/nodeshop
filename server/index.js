require("dotenv").config()
const express = require("express");
const sequelize = require("./db")
const modules = require("./models/models")
const cors = require("cors")
const fileupload = require("express-fileupload")
const router = require("./routes/index")
const PORT = process.env.PORT || 3000 // 5000
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileupload({}))
app.use("/api", router)

//Обработка ошибок, последний Middleware
app.use(errorHandler)
// app.get("/",(req, res)=>{
//     res.status(200).json({message:"WORKING!!!"})
// })


//стартуем сервер я ебал собак
const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>console.log(`"server started on port ${PORT}"`))
    } catch (e) {
        console.log(e)
    }
}
start()


