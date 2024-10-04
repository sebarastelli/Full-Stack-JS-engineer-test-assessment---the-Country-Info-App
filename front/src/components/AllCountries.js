import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/countries/available'); // Cambia la URL si es necesario
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        {countries.map((country) => (
          <div className="col-md-4 mb-4" key={country.countryCode}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <Link to={`/countries/${country.countryCode}`} className="btn btn-primary">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCountries;
