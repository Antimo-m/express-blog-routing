import express from "express"
import postRouter from "./routers/routes.js"

const app = express()
const port = 3000;

app.use (`/posts`, postRouter)


app.listen(port, () => {
    console.log(`questa è la mia porta d'accesso ${port}`)
})