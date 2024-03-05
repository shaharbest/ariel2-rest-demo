const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const auth = require('../middlewares/auth');

// signup
router.post('/', async (req, res) => {
    const givenPass = req.body.password;

    const hashedPass = await bcrypt.hash(givenPass, 10)

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
    };

    try {
        await User.create(newUser);
        res.sendStatus(201);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

router.post('/login', async (req, res) => {
    const givenEmail = req.body.email;
    const givenPass = req.body.password;

    const user = await User.findOne({ email: givenEmail });

    if (!user) {
        res.status(404).send('unknown email');
        return;
    }

    const hashedPass = user.password;

    if (!(await bcrypt.compare(givenPass, hashedPass))) {
        res.status(403).send('bad password');
        return;
    }

    const dataForToken = {
        name: user.name,
        email: user.email,
        id: user._id,
    };

    const token = jwt.sign(dataForToken, process.env.JWT_SECRET);

    res.json({ token });
});

router.get('/whoami', auth, (req, res) => {
    res.send(req.user.name);
});

module.exports = router;