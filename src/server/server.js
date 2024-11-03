import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import usersRoute from './route/user.js'
import database from './repository/init-database.js'


env.config()
const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

// Routes
app.use('/user', usersRoute)

app.get('/', async (req, res) =>  {
    try {
        await database.initializeDatabase()
        await database.initializeUsersTable()
        await database.initializeNamesTable() 
        await database.initializeImagesTable()
        await database.initializeProductsTable()
        await database.initializeProductImagesTable()
        await database.initializeSizesTable()
        await database.initializeProductSizesTable()
        await database.initializeOrdersTable()
        await database.initializeUsersInfoTable()
        await database.initializeCartsTable()
        await database.initializeUserImagesTable()

        res.send('BSU Resource Server')
    } 
    catch(error) {
        console.log(`[ERROR]! ${error}`)
        res.status(500).send('Database initialization failed')
    }
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))