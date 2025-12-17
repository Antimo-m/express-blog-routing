import express from "express"
import Napoli from "./Napoli";

const app = express()
const port = 3000;




app.listen(port, () => {
    console.log(`questa è la mia porta d'accesso ${port}`)
})