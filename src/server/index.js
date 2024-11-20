import cors from 'cors'
import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './route/user-route.js'
import dataRoute from './route/data-route.js'


env.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(cors());

// user routes
app.use('/users', userRoute)
app.use('/data', dataRoute)

app.use(express.static('public'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
