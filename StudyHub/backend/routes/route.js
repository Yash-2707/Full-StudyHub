const express = require('express');
const router = express.Router();  // Capital "R" in Router
const { feedback } = require('../controller/feedback');

router.post('/feedback', feedback);


module.exports = router;

