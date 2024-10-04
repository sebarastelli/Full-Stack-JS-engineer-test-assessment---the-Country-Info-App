import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetail = () => {
  const { countryCode } = useParams(); // Suponiendo que el código del país está en la URL
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/countries/info/${countryCode}`);
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{countryData.commonName}</h1>
      <img src={`http://flagcdn.com/w320/${countryData.countryCode.toLowerCase()}.png`} alt={`${countryData.commonName} flag`} />
      
      <h2>Border Countries</h2>
      <ul>
        {countryData.borders && countryData.borders.map((borderCountry) => (
          <li key={borderCountry.countryCode}>
            <Link to={`/countries/${borderCountry.countryCode}`}>{borderCountry.commonName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetail;