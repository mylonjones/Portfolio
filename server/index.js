
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/q&a', router);

app.listen(port, () => {
  console.log(`serving at ${port}`);
});