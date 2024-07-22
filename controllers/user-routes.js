import { Router } from "express";
import User from "../models/user.js";

const router = Router()

router.post("/create", async (req, res) => {
    const rawUser = req.body
    try {
        const user = await User.create(rawUser)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/login", async (req, res) => {
    const credentials = req.body
    try {
        const user = await User.findOne({ email: credentials.email, password: credentials.password })

        if(!user){
            res.status(401)
        }

        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("/logout", (req, res) => {

})


export default router