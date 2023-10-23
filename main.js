const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Handle POST request
app.post('/write', (req, res) => {
    const data = req.body;

    // Here, you can perform any action with the data, such as writing to a database.
    console.log('Received POST request with data:', data);

    // Respond to the client
    res.json({ status: 'Data received', receivedData: data });
});

// Load HTTPS certificates
const httpsOptions = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};
// Load HTTPS certificates
const httpsOptions = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

const PORT = 443;
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log(`HTTPS Server is running on https://localhost:${PORT}`);
});
