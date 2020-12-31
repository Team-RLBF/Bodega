const db = require('../../db.js');

const shoppingCheckout = (req, res, next) => {
  console.log('in shoppingCheckout');
  // Find items where buy_qty is positive
  // list of items is called basket
  let qStr = `SELECT * FROM shopping WHERE user_id = '1' AND buy_qty > 0;`;
  return (
    db
      .query(qStr)
      .then((qres) => {
        const basket = qres.rows;
        console.log(
          'file: shoppingCheckout.js ~ line 13 ~ .then ~ basket',
          basket,
        );
        // For each item in basket, check if a cooresponding pantry item exists
        basket.forEach((item) => {
          // If pantry item exists, update qty in pantry
          if (item.pantry_id) {
            qStr = `SELECT * FROM pantry WHERE _id = ${item.pantry_id};`;
            return (
              db
                .query(qStr) // should I return this line?
                .then((qres) => {
                  console.log(
                    'file: shoppingCheckout.js ~ line 18 ~ .then ~ qres.rows[0]',
                    qres.rows[0],
                  );
                  let pantryItem = qres.rows[0];
                  qStr = `UPDATE pantry 
            SET qty = ${pantryItem.qty + item.buy_qty}
            WHERE _id = ${item.pantry_id} RETURNING *;`;
                  return db.query(qStr);
                })
                // update qty in shopping list
                .then((qres) => {
                  console.log(
                    'file: shoppingCheckout.js ~ line 26 ~ .then ~ qres.rows[0]',
                    qres.rows[0],
                  );

                  qStr = `UPDATE shopping 
          SET (buy_qty, list_qty) = (0, ${Math.max(
            0,
            item.list_qty - item.buy_qty,
          )}) 
          WHERE _id = ${item._id} RETURNING *;`;
                  return db.query(qStr);
                  // return next();
                })
                // .then((qres) => {
                //   console.log(
                //     'file: shoppingCheckout.js ~ line 37 ~ .then ~ qres.rows[0]',
                //     qres.rows[0],
                //   );
                //   qStr = `DELETE FROM shopping WHERE user_id = '1' AND list_qty <= 0 RETURNING *;`;
                //   return db.query(qStr);
                // })
                // .then((qres) => {
                //   console.log(
                //     'file: shoppingCheckout.js ~ line 52 ~ .then ~ qres.rows',
                //     qres.rows,
                //   );
                //   return next();
                // })
                .catch(() => {
                  return next({
                    log:
                      'shoppingController.shoppingCheckout if statment error',
                    message: { err: 'SQL query failed' },
                  });
                })
            );
            // if a pantry item does not exist add a pantry item, and update shopping qty
          } else {
            console.log('in else...');
            qStr = `INSERT INTO pantry (user_id, item_name, note, unit, qty, par, category) VALUES ('1','${item.item_name}', '${item.note}', '${item.unit}', '${item.buy_qty}', '0', '${item.category}') RETURNING *;`;
            return (
              db
                .query(qStr)
                .then((qres) => {
                  const pantry_id = qres.rows[0]._id;
                  qStr = `UPDATE shopping 
          SET (pantry_id, list_qty, buy_qty ) = ('${pantry_id}', ${Math.max(
                    0,
                    item.list_qty - item.buy_qty,
                  )},0 )
          WHERE _id = ${item._id} RETURNING *;`;
                  return db.query(qStr);
                  // return next;
                })
                // .then((qres) => {
                //   console.log(
                //     'file: shoppingCheckout.js ~ line 64 ~ .then ~ qres.rows[0]',
                //     qres.rows[0],
                //   );
                //   qStr = `DELETE FROM shopping WHERE user_id = '1' AND list_qty <= 0 RETURNING *;`;
                //   return db.query(qStr);
                // })
                // .then((qres) => {
                //   console.log(
                //     'file: shoppingCheckout.js ~ line 85 ~ .then ~ qres.rows',
                //     qres.rows,
                //   );
                //   return next();
                // })
                .catch(() => {
                  return next({
                    log:
                      'shoppingController.shoppingCheckout else statment error',
                    message: { err: 'SQL query failed' },
                  });
                })
            );
          }
        });
      })
      .then(() => {
        return next();
      })
      // .then((qres) => {
      //   console.log(
      //     'file: shoppingCheckout.js ~ line 37 ~ .then ~ qres.rows[0]',
      //     qres.rows[0],
      //   );
      //   qStr = `DELETE FROM shopping WHERE user_id = '1' AND list_qty <= 0 RETURNING *;`;
      //   return db.query(qStr);
      // })
      // .then((qres) => {
      //   console.log(
      //     'file: shoppingCheckout.js ~ line 52 ~ .then ~ qres.rows',
      //     qres.rows,
      //   );
      //   return next();
      // })
      .catch(() => {
        return next({
          log: 'shoppingController.shoppingCheckout error',
          message: { err: 'SQL query failed' },
        });
      })
  );
};

module.exports = shoppingCheckout;
