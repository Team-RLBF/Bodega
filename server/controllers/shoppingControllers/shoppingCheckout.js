const db = require('../../db.js');

const shoppingCheckout = (req, res, next) => {
  console.log('in shoppingCheckout');
  // Find items where buy_qty is positive
  // list of items is called basket
  let qStr = `SELECT * FROM shopping WHERE user_id = '1' AND buy_qty > 0;`;
  db.query(qStr)
    .then((qres) => {
      const basket = qres.rows;
      // For each item in basket, check if a pantry item exists
      basket.forEach((item) => {
        // If pantry item exists, update qty
        if (item.pantry_id) {
          qStr = `SELECT * FROM pantry WHERE _id = ${item.pantry_id};`;
          db.query(qStr)
            .then((qres) => {
              let pantryItem = qres.rows[0];
              qStr = `UPDATE pantry 
            SET qty = ${pantryItem.qty + item.buy_qty}
            WHERE _id = ${item.pantry_id};`;
              db.query(qStr);
            })
            // update qty in shopping list
            .then(() => {
              qStr = `UPDATE shopping 
          SET list_qty = ${Math.max(0, item.list_qty - item.buy_qty)} 
          WHERE _id = ${item._id};`;
              db.query(qStr);
            });
          // if a pantry item does not exist add a pantry item, and update shopping qty
        } else {
          console.log('in else...');
          qStr = `INSERT INTO pantry (user_id, item_name, note, unit, qty, category) VALUES ('1','${item.item_name}', '${item.note}', '${item.unit}', '${item.buy_qty}', '${item.category}') RETURNING *;`;
          return db.query(qStr).then((qres) => {
            const pantry_id = qres.rows[0]._id;
            qStr = `UPDATE shopping 
          SET (pantry_id, list_qty, buy_qty ) = ('${pantry_id}', ${Math.max(
              0,
              item.list_qty - item.buy_qty,
            )},0 )
          WHERE _id = ${item._id};`;
            db.query(qStr);
          });
        }
      });
    })
    // delete items from shopping list if list_qty = 0 or null
    .then(() => {
      qStr = `DELETE FROM shopping WHERE user_id = '1' AND (list_qty = 0 OR list_qty IS NULL);`;
      db.query(qStr);
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingCheckout error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingCheckout;
