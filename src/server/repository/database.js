import env from 'dotenv'
import mysql from 'mysql2'


/*
    USE ? IN PASSING PARAMS ONLY IN:
    1. SELECT queries with WHERE
    2. INSERT
    3. UPDATE
    4. DELETE
*/

class Database {
    constructor() {
        env.config()

        this.pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.MYSQL_HOST,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        }).promise()
    }

    async getAll(query) {
        await this.pool.execute(query)
    }

    async getAll(query, params) {
        if (typeof query !== "string") {
            throw new Error("Invalid query!");
        }
        if (!Array.isArray(params)) {
            throw new Error("Parameters must be in array.")
        }

        await this.pool.query(query, params)  
    }
}