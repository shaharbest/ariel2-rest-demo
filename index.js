const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', require('./routes/usersRoutes'));

db.connect();

app.listen(port, () => {
    console.log('listen to port', port)
});