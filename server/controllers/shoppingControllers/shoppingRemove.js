const db = require('../../db.js');

const shoppingRemove = (req, res, next) => {
  const item_id = req.params.id;
  console.log(
    'file: shoppingDelete.js ~ line 5 ~ shoppingDelete ~ item_id',
    item_id,
  );
  const qStr = `DELETE FROM shopping 
  WHERE _id = ${item_id}
  RETURNING *;`;
  db.query(qStr)
    .then((qres) => {
      res.locals.deletedItem = qres.rows;
      console.log(
        'file: shoppingDelete.js ~ line 12 ~ .then ~ res.locals.deletedItem',
        res.locals.deletedItem,
      );
      return next();
    })
    .catch(() =>
      next({
        log: 'shoppingController.shoppingDelete error',
        message: { err: 'SQL query failed' },
      }),
    );
};

module.exports = shoppingRemove;
