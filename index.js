require('dotenv').config();
const express = require('express');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong');
})

app.use('/users', require('./routes/usersRoutes'));
app.use('/tasks', require('./routes/tasksRoutes'));

db.connect();

app.listen(port, () => {
    console.log('listen to port', port)
});