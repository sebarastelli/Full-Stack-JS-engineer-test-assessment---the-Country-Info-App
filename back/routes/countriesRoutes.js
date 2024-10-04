const express = require('express');
const router = express.Router();
const {
  getAvailableCountries,
  getCountryInfo,
  getCountryFlag,
  getPopulationData
} = require('../controllers/countriesController');

router.get('/available', getAvailableCountries);
router.get('/info/:countryCode', getCountryInfo);
router.get('/flag/:iso2', getCountryFlag);
router.get('/population/:iso3', getPopulationData);

module.exports = router;
