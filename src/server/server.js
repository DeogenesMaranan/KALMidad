import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import usersRoute from './route/user.js'
import database from './repository/initDatabase.js'


env.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

// Routes
app.use('/user', usersRoute)

app.get('/', async (req, res) =>  {
    try {
        await database.inializeDatabase()
        await database.initializeUsersTable()
        res.send('BSU Resource Server')
    } 
    catch(error) {
        console.log(`[ERROR]! ${error}`)
        res.status(500).send('Database initialization failed')
    }
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))