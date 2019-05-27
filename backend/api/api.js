const express = require('express');

const router = express.Router();
let requestTimes = 0;

const db = require('./todo');

router.use(function(req, res, next) {
  requestTimes += 1;
  next();
});

router.get('/', function(req, res) {
  res.send(`Kokonaismäärä pyyntöjä: ${requestTimes}`);
});

// eslint-disable-next-line prettier/prettier
router.route('/notes')
  .get(db.getNotes)
  .post(db.addNote);

module.exports = router;
