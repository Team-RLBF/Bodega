const express = require('express');
const pantry = express.Router();
const pantryController = require('../controllers/pantryControllers/pantryController.js');
const authController = require('../controllers/authControllers/authController');

// output: return entire pantry table as JSON
pantry.get(
    '/',
    // authController.authCheckCookie,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

// input: js object, contains key-value pairs from pantry table
// output: return entire pantry table as JSON
pantry.post(
    '/submit',
    // authController.authCheckCookie,
    pantryController.pantrySubmit,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

// input: js object, contains key-value pairs from pantry table
// output: return entire pantry table as JSON 
pantry.put(
    '/update/:id',
    // authController.authCheckCookie,
    pantryController.pantryUpdate,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.put(
    '/itemup/:id',
    // authController.authCheckCookie,
    pantryController.pantryItemUp,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.put(
    '/itemdown/:id',
    // authController.authCheckCookie,
    pantryController.pantryItemDown,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

// input: item id
// output: return entire pantry table as JSON
pantry.delete(
    '/delete/:id',
    // authController.authCheckCookie,
    pantryController.pantryDelete,
    pantryController.pantryGet,
    (req, res) => {
        return res.status(200).json(res.locals.pantry);
    }
);

module.exports = pantry;