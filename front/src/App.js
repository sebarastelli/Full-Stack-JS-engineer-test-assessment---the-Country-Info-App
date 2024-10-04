import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import AllCountries from './components/AllCountries';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<AllCountries />} />
      <Route path="/countries/:countryCode" element={<CountryDetail />} />
    </Routes>
  </Router>
  );
}

export default App;
