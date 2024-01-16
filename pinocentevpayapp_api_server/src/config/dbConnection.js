const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: process.env.CLEVER_CLOUD_HOST,
        user: process.env.CLEVER_CLOUD_USER,
        password: process.env.CLEVER_CLOUD_PASSWORD,
        database: process.env.CLEVER_CLOUD_DATABASE 
    });

}
