const db = require('../../db.js');

const shoppingListUp = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `UPDATE shopping 
  SET list_qty = list_qty + 1 
  WHERE _id = ${item_id};`;
  db.query(qStr)
    .then((qres) => {
      console.log(
        'file: shoppingListUp.js ~ line 11 ~ .then ~ qres.rows[0]',
        qres.rows[0],
      );
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingListUp error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingListUp;
