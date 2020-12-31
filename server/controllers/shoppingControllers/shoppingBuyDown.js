const db = require('../../db.js');

const shoppingBuyDown = (req, res, next) => {
  const item_id = req.params.id;
  const qStr = `UPDATE shopping 
  SET buy_qty = buy_qty - 1 
  WHERE _id = ${item_id};`;
  db.query(qStr)
    .then((qres) => {
      console.log(
        'file: shoppingBuyDown.js ~ line 11 ~ .then ~ qres.rows[0]',
        qres.rows[0],
      );
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingListDown error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingBuyDown;
