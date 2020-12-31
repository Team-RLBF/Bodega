const db = require('../../db.js');

const pantryDelete = (req, res, next) => {
    let id = req.params.id;

    let deletePantry = `DELETE FROM pantry WHERE _id = $1;`;
    let values = [id];

    db.query(deletePantry, values)
        .then(() => {
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryDelete ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                }
            });
        });
}

module.exports = pantryDelete;