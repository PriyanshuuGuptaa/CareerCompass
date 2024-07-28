const express = require('express');
const { OccupationDataController } = require('../controllers/occupationController');

const router = express.Router();

router.get('/occupations', OccupationDataController);


module.exports = router;