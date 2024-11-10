import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './route/user-route.js'

env.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

// user routes
app.use('/users', userRoute)

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
