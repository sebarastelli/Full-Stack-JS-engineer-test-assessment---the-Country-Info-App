const axios = require('axios');

const getAvailableCountries = async (req, res) => {
  try {
    const response = await axios.get(
      'https://date.nager.at/api/v3/AvailableCountries'
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
};

const getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;
  try {
    const countryInfo = await axios.get(
      `https://date.nager.at/api/v3/CountryInfo/${countryCode}`
    );
    res.json(countryInfo.data);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: 'Error fetching country info', error: error.message });
  }
};

const getCountryFlag = async (req, res) => {
  const { iso2 } = req.params;
  try {
    const flagResponse = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/flag/images',
      { iso2 }
    );
    if (flagResponse.data && flagResponse.data.data) {
      const flagUrl = flagResponse.data.data.flag;
      res.json({ flag: flagUrl });
    } else {
      throw new Error('No flag data found');
    }
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: 'Error fetching country flag', error: error.message });
  }
};

const getPopulationData = async (req, res) => {
  const { iso3 } = req.params;

  try {
    const response = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`, {
      params: {
        country: iso3,
      },
    });

    if (response.data && response.data.data) {
      const populationCounts = response.data.data[0].populationCounts; // Suponiendo que solo quieres el primer país
      const formattedData = populationCounts.map(({ year, value }) => ({
        year,
        population: value,
      }));

      res.status(200).json(formattedData); // Devuelve solo los datos formateados
    } else {
      throw new Error('No population data found');
    }
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: 'Error fetching population data', error: error.message });
  }
};

module.exports = { getAvailableCountries, getCountryInfo, getCountryFlag, getPopulationData};
