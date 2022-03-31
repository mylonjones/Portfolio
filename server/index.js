
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const compression = require('compression');

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/q&a', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`serving at ${port}`);
});