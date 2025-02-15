const express = require('express');
const { createReferral } = require('../controllers/referralController');

const router = express.Router();

router.post('/submit', createReferral);

module.exports = router;
