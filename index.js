const express = require('express');
const mongo = require('mongodb');

const request = require('request');
const cheerio = require('cheerio');
const michelin = require('michelin');
const lafourchette = require('lafourchette');


const url = 'mongodb://localhost:27017';

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});

michelin.get();
lafourchette.getDeal();