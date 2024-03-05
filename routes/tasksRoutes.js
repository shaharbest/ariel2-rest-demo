const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, async (req, res) => {
    try {
        console.log(req.user.id);
        const tasks = await Task.find({ userID: req.user.id });
        res.json(tasks);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.post('/', auth, async (req, res) => {
    const newTask = {
        title: req.body.title,
        userID: req.user.id,
    };

    try {
        await Task.create(newTask);
        res.sendStatus(201);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;