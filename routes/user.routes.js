const express = require('express');

const router = express.Router();
const { getUsers } = require('../modules/user/user.controller');

router.get('/all', getUsers);

module.exports = router;
