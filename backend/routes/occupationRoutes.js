const express = require('express');
const { OccupationDataController, Occupation_Summary } = require('../controllers/occupationController');

const router = express.Router();

router.get('/occupations', OccupationDataController);
router.get('/api/profilesummary/:code', Occupation_Summary);

module.exports = router;