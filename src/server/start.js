import env from 'dotenv'
import promptSync from 'prompt-sync'

env.config()
const prompt = promptSync()

console.log('======== MYSQL CREDENTIALS ========')
console.log('Press ENTER to leave default value')

const host     = prompt('  Host [default=127.0.0.1]: ')
const user     = prompt('       User [default=root]: ')
const password = prompt('            Enter password: ', {echo: '*'})

process.env.MYSQL_HOST = host
process.env.MYSQL_USER = user
process.env.MYSQL_PASSWORD = password

import('./server.js')
