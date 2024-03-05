const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const protocol = process.env.DB_PROTOCOL;
const uri = `${protocol}://${host}`;
const dbName = 'avibiter';

function connect() {
    mongoose.connect(uri, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        dbName,
    });
}

function disconnect() {
    mongoose.connection.close();
}

module.exports = {
    connect,
    disconnect,
};