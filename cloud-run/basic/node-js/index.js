const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');
  console.log(`req.url = ${req.url}`)

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});
app.get("/addToCart", (req, res) => {
  console.log(`req.url = ${req.url}`)
  res.send(`Hello from /addToCart`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});