const db = require('../../db.js');

const shoppingGet = (req, res, next) => {
  console.log('in shoppingGet');
  let qStr = `SELECT * FROM shopping WHERE user_id = '1';`;
  db.query(qStr)
    .then((qres) => {
      res.locals.shopping = qres.rows;
      console.log(
        'file: shoppingGet.js ~ line 9 ~ .then ~ res.locals.shopping',
        res.locals.shopping,
      );
      return next();
    })
    .catch(() => {
      return next({
        log: 'shoppingController.shoppingGet error',
        message: { err: 'SQL query failed' },
      });
    });
};

module.exports = shoppingGet;
