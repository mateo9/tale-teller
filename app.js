const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json());

app.get('/', (req, res, next) => {
    res.send('Hello!')
});

app.listen(3000);