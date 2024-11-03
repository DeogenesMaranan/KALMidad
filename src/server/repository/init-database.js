import env from 'dotenv'
import mysql from 'mysql2'

class InitDatabase {
    constructor() {
        env.config()

        this.pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        }).promise();
    }

    async initializeDatabase() {
        const database = process.env.MYSQL_DATABASE
        const query = `CREATE DATABASE IF NOT EXISTS ${database}`
        
        await this.pool.query(query)
        await this.pool.query(`USE ${database}`)
    }

    async initializeUsersTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS users(
            userId VARCHAR(40) NOT NULL UNIQUE,
            email VARCHAR(60) NOT NULL UNIQUE,
            password VARCHAR(15) NOT NULL,
            
            PRIMARY KEY(userId)
        )`)
    }

    async initializeNamesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS names (
            userId VARCHAR(40) NOT NULL UNIQUE,
            firstName VARCHAR(30) NOT NULL,
            lastName VARCHAR(30) NOT NULL,
            
            PRIMARY KEY(userId),
            FOREIGN KEY(userId) REFERENCES users(userId)
        )`)
    }

    async initializeImagesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS images(
            imageId VARCHAR(40) NOT NULL UNIQUE,
            image LONGBLOB NOT NULL,
            imageName VARCHAR(255) NOT NULL,

            PRIMARY KEY(imageId)
        )`)
    }

    async initializeProductsTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS products(
            productId VARCHAR(40) NOT NULL UNIQUE,
            productName VARCHAR(50) NOT NULL,
            price DECIMAL(12, 4) NOT NULL,
            description VARCHAR(2000),
            
            PRIMARY KEY(productId)
        )`)
    }

    async initializeProductSizesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS productSizes(
            productSizeId VARCHAR(40),
            productId VARCHAR(40),
            sizeId VARCHAR(5) NOT NULL, 
            quantity INT NOT NULL,
            
            PRIMARY KEY(productSizeId),
            FOREIGN KEY(sizeId) REFERENCES sizes(sizeId),
            FOREIGN KEY(productId) REFERENCES products(productId)
        )`)
    }

    async initializeProductImagesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS productImages(
            imageId VARCHAR(40) NOT NULL UNIQUE,
            productId VARCHAR(40) NOT NULL UNIQUE,

            PRIMARY KEY(imageId),
            FOREIGN KEY(imageId) REFERENCES images(imageId),
            FOREIGN KEY(productId) REFERENCES products(productId)
        )`)
    }

    async initializeSizesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS sizes(
            sizeId VARCHAR(40) NOT NULL UNIQUE,
            size VARCHAR(5) NOT NULL,
            isTop TINYINT(1) NOT NULL DEFAULT 0,
            chest DECIMAL(10, 2),
            length DECIMAL(10, 2),
            sleeve DECIMAL(10, 2),
            shoulder DECIMAL(10, 2),
            waist DECIMAL(10, 2),
            hip DECIMAL(10, 2),
            thigh DECIMAL(10, 2),
            
            PRIMARY KEY(sizeId)
        )`)
    }

    async initializeOrdersTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS orders(
            orderId VARCHAR(40) NOT NULL UNIQUE,
            buyerId VARCHAR(40) NOT NULL,
            orderDate DATETIME NOT NULL,
            pickuUpDate DATETIME NOT NULL,

            PRIMARY KEY(orderId),
            FOREIGN KEY(buyerId) REFERENCES users(userId)
        )`)
    }
    
    async initializeUsersInfoTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS usersInfo(
            userId VARCHAR(40) NOT NULL UNIQUE,
            srCode VARCHAR(10) NOT NULL UNIQUE,
            contactNumber VARCHAR(15) NOT NULL,

            PRIMARY KEY(userId),
            FOREIGN KEY(userId) REFERENCES users(userId)
        )`)
    }

    async initializeCartsTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS carts(
            cartId VARCHAR(40) NOT NULL UNIQUE,
            productId VARCHAR(40) NOT NULL, 
            userid VARCHAR(40) NOT NULL,
            quantity INT NOT NULL,
            time DATETIME NOT NULL,

            PRIMARY KEY(cartId),
            FOREIGN KEY(productId) REFERENCES products(productId),
            FOREIGN KEY(userId) REFERENCES users(userId)
        )`)
    }

    async initializeUserImagesTable() {
        await this.pool.execute(`CREATE TABLE IF NOT EXISTS userImages(
            userId VARCHAR(40) NOT NULL UNIQUE,
            imageId VARCHAR(40) NOT NULL,

            PRIMARY KEY(userId),
            FOREIGN KEY(userId) REFERENCES users(userId),
            FOREIGN KEY(imageId) REFERENCES images(imageId)
        )`)
    }
}

export default new InitDatabase