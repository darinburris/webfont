const path = require('path');
const express = require('express');
const app = express();
const staticPath = path.join(__dirname, '/release');
const PORT = 4000;

app.use(express.static(staticPath));

app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
  console.log('http://localhost:' + PORT);
});