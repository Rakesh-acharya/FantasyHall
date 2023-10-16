const express = require('express');
const app = express();
const db = require('./db'); 
const seatRoutes = require('./api/routes/seatRoutes');
const insertDataRoutes = require('./api/routes/insertDataRoutes');

app.use(express.json());

app.use('/seats', seatRoutes);
app.use('/insert-data', insertDataRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});