const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index_controller');
//more routes to be added.
router.get('/', indexController.index);

module.exports = router;