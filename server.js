const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = pocess.env.PORT || process.argv[2] || 8000;



http.createServer(app).listen(PORT, () => console.log(`we are listening for requests on port ${port}`));