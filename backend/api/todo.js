// eslint-disable-next-line prefer-destructuring
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'tomi',
  host: 'localhost',
  database: 'todo',
  password: '',
  port: 5432
});

function userDataStringValidation(data) {
  if (data === '') {
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
    msg: 'Jotain meni pieleen'
  };
  // eslint-disable-next-line prefer-destructuring
  const note = req.body.note;

  if (!userDataStringValidation(note)) {
    res.status(200).send(JSON.stringify(response));
    return;
  }

  pool.query('insert into notes (note) values ($1)', [note], err => {
    if (err) {
      throw err;
    }
    response.success = true;
    response.msg = `Note luotu`;
    res.status(200).send(JSON.stringify(response));
  });
};

const deleteNote = (req, res) => {
  const response = {
    success: false,
    msg: 'jotain meni pieleen'
  };
  const id = parseInt(req.params.id);
  console.log(id);

  pool.query('delete from notes where id = $1', [id], err => {
    if (err) {
      throw err;
    }
    response.success = true;
    response.msg = `poistettu`;
    res.status(200).send(JSON.stringify(response));
  });
};

module.exports = {
  getNotes,
  addNote,
  deleteNote
};
