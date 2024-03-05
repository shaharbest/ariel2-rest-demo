const mongoose = require('mongoose');

const uri = `mongodb://127.0.0.1:27017`;
const dbName = 'avibiter';

function connect() {
    mongoose.connect(uri, {
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