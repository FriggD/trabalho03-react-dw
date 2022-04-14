require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Database config
require('./database');

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

app.use(require('./routes/livroRoutes'));

// Server Conf
const port = process.env.APP_PORT_LISTEN || '8000';
const host = '0.0.0.0';

app.listen(port, host, function () {
  console.log(`Listen on port ${port}`);
});

