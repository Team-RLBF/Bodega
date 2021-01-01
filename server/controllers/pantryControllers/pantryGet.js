const db = require("../../db.js");

const pantryGet = (req, res, next) => {
  const getPantry = "SELECT * FROM pantry WHERE user_id = $1;";
  // let values = [res.locals.userID];

  // testing values
  const values = [1];

  db.query(getPantry, [1])
    .then((result) => {
      res.locals.pantry = result.rows;
      // console.log(res.locals.pantry);
      return next();
    })
    .catch((err) =>
      next({
        log: "pantryController.pantryGet " + `${err}`,
        message: {
          err: "SQL query failed",
        },
      })
    );
};

module.exports = pantryGet;
