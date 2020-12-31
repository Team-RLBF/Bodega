const db = require('../../db.js');

const shoppingSubmit = (req, res, next) => {
  const newItem = req.body.newItem;
  console.log(
    'file: shoppingSubmit.js ~ line 5 ~ shoppingSubmit ~ newItem',
    newItem,
  );
  const qStr = `INSERT INTO shopping (user_id, item_name, note, unit, list_qty, category) VALUES (${res.locals.userId}, ${newItem.item_name}, ${newItem.note}, ${newItem.unit}, ${newItem.list_qty}, ${newItem.category})
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.newItem = qres.rows;
      console.log(
        'file: shoppingSubmit.js ~ line 11 ~ .then ~ res.locals.newItem',
        res.locals.newItem,
      );
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingSubmit error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingSubmit;
