const Pool = require('pg').Pool;
const { DB } = require('./config');

const pool = new Pool({
    user: DB.PGUSER,
    host: DB.PGHOST,
    database: DB.PGDATABASE,
    password: DB.PGPASSWORD,
    port: DB.PGPORT
})

// see .env file...

module.exports = pool;