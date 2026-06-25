const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'))

app.get('/contact/:slug', (req, res) => {
  res.send(`<h1>Hello World!    ${req.params.slug}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});