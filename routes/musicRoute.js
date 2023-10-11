const express = require('express');
const router = express.Router();

const musicController = require('../controller/musicController');

// /music
router 
    .route('/')
    .get(musicController.listAllMusic)
    .post(musicController.createAMusic);

// /music/:id_music

route
    .route('/:id_music')
    .delete(musicController.deleteAMusic)
    .put(musicController.updateAMusic)
    .get(musicController.findAMusic);

    module.exports = router;