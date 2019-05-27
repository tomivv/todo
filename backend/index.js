const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/api');

const app = express();
const port = 3001;
// const db = require('./langat/langat')

app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('kokeile uudestaan!');
});

app.use('/api', api);

app.listen(port, () => console.log(`Test app listening on port ${port}`));
