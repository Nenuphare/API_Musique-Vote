const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/apinode');

app.use(express.urlencoded());
app.use(express.json());

//Route pour le CRUD des Posts
const postRoute = require('./routes/musicRoute');
app.use('/musics', postRoute);

//Route pour le CRUD des Comments
const commentRoute = require('./routes/commentRoute');
app.use('/', commentRoute);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  });
  
  