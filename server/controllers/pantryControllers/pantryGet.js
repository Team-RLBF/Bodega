const db = require('../../db.js');

const pantryGet = (req, res, next) => {
    let getPantry = 'SELECT * FROM pantry WHERE user_id = $1;';
    let values = [res.locals.userID];

    // testing values
    // let values = [1];

    db.query(getPantry, values)
        .then((result) => {
            res.locals.pantry = result.rows;
            // console.log(res.locals.pantry);
            return next();
        })
        .catch((err) => {
            return next({
                log: 'pantryController.pantryGet ' + `${err}`,
                message: {
                    err: 'SQL query failed'
                },
            });
        });
}

module.exports = pantryGet;