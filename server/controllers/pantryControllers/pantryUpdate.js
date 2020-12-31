const db = require('../../db.js');

const pantryUpdate = (req, res, next) => {
    // destructuring from request
    let {
        item_name,
        note,
        unit,
        qty,
        category,
        par,
    } = req.body;
    let id = req.params.id;

    let update = `UPDATE pantry SET item_name = $1, note = $2, unit = $3, qty = $4, category = $5, par = $6 WHERE _id = $7;`;
    let values = [item_name, note, unit, qty, category, par, id];

    db.query(update, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryUpdate ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryUpdate;