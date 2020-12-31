const db = require('../../db.js');

const shoppingAddFromPantry = (req, res, next) => {
  const item_id = req.params.id;
  // find out if item from pantry is already in shopping
  // if so, update list_qty to be list_qty + 1
  // if not insert into shopping with list_qty + 1
  qStr = `SELECT * FROM shopping WHERE pantry_id = ${item_id};`;
  db.query(qStr)
    .then((qres) => {
      return qres.rows[0] ? qres.rows[0] : false;
    })
    .then((pantryItem) => {
      if (!pantryItem) {
        const qStr = `INSERT INTO shopping (user_id, pantry_id, item_name, note, unit, list_qty, buy_qty, category) 
  SELECT user_id, _id, item_name, note, unit, '1', '0', category
  FROM pantry
  WHERE _id = ${item_id};`;
        db.query(qStr);
      } else {
        const qStr = `UPDATE shopping 
    SET list_qty = '${pantryItem.list_qty + 1}' 
    WHERE pantry_id = ${item_id};`;
        db.query(qStr);
      }
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingAddFromPantry error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingAddFromPantry;
