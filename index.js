import app from "./app.js"
import "./db/connection.js"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./controllers/user-routes.js"

dotenv.config()

app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
    console.log("listening on port: " + process.env.PORT)
})