import env from 'dotenv';
import mysql from 'mysql2/promise';

class Database {
    constructor() {
        env.config();

        this.pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.MYSQL_HOST,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        }).promise()
    }

    async getAll(query) {
        this.queryValidation(query)
        try {
            return [results] = await this.pool.execute(query)
        } catch (error) {
            console.error("Error executing query:", error)
            throw new Error('Database query failed.')
        }
    }

    async invoke(query, params) {
        this.queryValidation(query, params);
        try {
            return [results] = await this.pool.query(query, params)
        } catch (error) {
            console.error("Error executing query:", error)
            throw new Error('Database query failed.')
        }
    }

    queryValidation(query, params = []) {
        if (typeof query !== 'string') {
            throw new TypeError('Invalid MySQL query: query must be a string.')
        }
        if (!Array.isArray(params)) {
            throw new TypeError('Parameters must be in an array.')
        }
    }
}

export default new Database();
