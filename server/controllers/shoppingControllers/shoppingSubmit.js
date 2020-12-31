const db = require('../../db.js');

const shoppingSubmit = (req, res, next) => {
  console.log('in shoppingSubmit');
  const newItem = req.body;
  console.log(
    'file: shoppingSubmit.js ~ line 5 ~ shoppingSubmit ~ newItem',
    newItem,
  );
  const qStr = `INSERT INTO shopping (user_id, item_name, note, unit, list_qty, buy_qty, category) VALUES ('1', '${newItem.item_name}', '${newItem.note}', '${newItem.unit}', '${newItem.list_qty}', '0','${newItem.category}')
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
    .catch((err) => {
      console.log(err);
      return next({
        log: 'shoppingController.shoppingSubmit error',
        message: { err: 'SQL query failed' },
      });
    });
};

module.exports = shoppingSubmit;
