import cors from 'cors'
import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './route/user-route.js'
import nameRoute from './route/name-route.js'


env.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use(cors());

// user routes
app.use('/users', userRoute)
app.use('/names', nameRoute)


app.use(express.static('public'));
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
