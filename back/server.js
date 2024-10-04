require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const countriesRoutes = require('./routes/countriesRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/countries', countriesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
