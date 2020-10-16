const express = require('express');

const router = express.Router();
const user = require('./user.routes');
const errorHandler = require('../helpers/errorHandler');

router.use('/user', user);
router.use(errorHandler);
module.exports = router;
