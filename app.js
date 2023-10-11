const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/apimusique');

app.use(express.urlencoded());
app.use(express.json());

//Route pour le CRUD des Musique
const musicRoute = require('./routes/musicRoute');
app.use('/musics', musicRoute);

//Route pour le CRUD des Votes
const voteRoute = require('./routes/voteRoute');
app.use('/', voteRoute);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  });
  
  