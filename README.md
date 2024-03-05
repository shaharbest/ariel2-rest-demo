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

create routers for `/users`, `/tasks` and `/categories`.