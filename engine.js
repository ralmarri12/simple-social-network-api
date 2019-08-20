require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/api-v1');

const engine = express();
engine.use(bodyParser.json());


engine.use('/api/v1/', router);

const port = process.env.PORT || 3000;
engine.listen(port || 3000, () => {
    console.log(`API Engine works on port ${port}`);
});