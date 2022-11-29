import express from 'express'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
const DB_CONNECTION_STRING = 
'mongodb+srv://hpadilla6201:Cristiano7!!@cluster0.26fhyow.mongodb.net/tuiter?retryWrites=true&w=majority'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://localhost:27017/tuiter'
mongoose.connect(DB_CONNECTION_STRING);


const app = express()
app.use(cors())
app.use(express.json()); // parse JSON from HTTP request body
HelloController(app)
TuitsController(app);
UserController(app)
app.listen(process.env.PORT || 4000)
