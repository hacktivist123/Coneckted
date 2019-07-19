const express = require('express');
const router = express.Router();

// @route GET api/users
// @desc Test route

router.get('/', (req, res) => res.send('User route'));