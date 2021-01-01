const db = require("../../db.js");

const pantrySubmit = (req, res, next) => {
  // console.log(req.body);

  const { item_name, note, unit, qty, category, par } = req.body;
  //   let userId = res.locals.userId;

  // for testing
  const userId = 1;

  const insert = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category, par) VALUES ($1, $2, $3,
        $4, $5, $6, $7);`;
  const values = [userId, item_name, note, unit, qty, category, par];

  db.query(insert, values)
    .then(() => next())
    .catch((err) =>
      next({
        log: "pantryController.pantrySubmit " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      })
    );
};

module.exports = pantrySubmit;
