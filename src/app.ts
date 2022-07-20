import express, { json } from "express"
import "express-async-errors";
import cors from "cors"
import errorHandler from "./middlewares/errorHandler.js"

const app = express()

app.use(cors())
app.use(json())
app.use(errorHandler)

export default app