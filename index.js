const express = require('express');
const mongo = require('mongodb');
const michelin = require('michelin');
const lafourchette = require('lafourchette');


const url = 'mongodb://localhost:27017';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('\n\nHello, world!\n\n');
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});

michelin.get();
lafourchette.getDeal();