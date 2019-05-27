// eslint-disable-next-line prefer-destructuring
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'tomi',
  host: 'localhost',
  database: 'todo',
  password: '',
  port: 5432,
});

function userDataStringValidation(data) {
  if (data === '') {
    return false;
  }
  // eslint-disable-next-line use-isnan
  if (data === NaN) {
    return false;
  }
  if (data == null) {
    return false;
  }
  return true;
}

const getNotes = (req, res) => {
  pool.query('select * from notes order by id asc', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addNote = (req, res) => {
  const response = {
    success: false,
    msg: 'Jotain meni pieleen',
  };
  // eslint-disable-next-line prefer-destructuring
  const note = req.query.note;
  console.log(req.query.note);
  console.log(note);

  if (!userDataStringValidation(note)) {
    res.status(200).send(JSON.stringify(response));
    return;
  }

  pool.query('insert into notes (note) values ($1)', [note], (err, results) => {
    if (err) {
      throw err;
    }
    response.success = true;
    response.msg = `Note luotu`;
    res.status(200).send(JSON.stringify(response));
  });
};

module.exports = {
  getNotes,
  addNote,
};
