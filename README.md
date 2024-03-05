# Ariel2 Rest Demo

create `pacjage.json`

```sh
npm init -y
```

add packages we need

```sh
npm i express mongoose
```

install nodemon in devDependencies

```sh
npm i -D nodemon
```

create `index.js`

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log('listen to port', port)
});
```

in `package.json`

```json
{
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "resetDB": "node resetDB.js"
    }
}
```

in development environment

```sh
npm run dev
```

create routers for `/users`, `/tasks` and `/categories`.

`routes/tasksRoute.js`

```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hi');
});

router.get('/:id', (req, res) => {
    res.send('hi');
});

router.post('/', (req, res) => {
    res.send('hi');
});

router.delete('/', (req, res) => {
    res.send('hi');
});

router.patch('/', (req, res) => {
    res.send('hi');
});

module.exports = router;
```