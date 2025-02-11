import express from 'express'
import MainRouter from './app/routes/index'
import bodyParser from 'body-parser'
const app = express()

app.use(express.json())
app.use(bodyParser.json())

app.use('/' , MainRouter)

app.listen(3000 , ()=>{
    console.log("server is running")
})