const express = require('express');
const router = express.Router();

const voteController = require('../controller/voteController');
const { route } = require('./musicRoute');

// /vote/:id_vote
router
    .route('/vote/:id_vote')
    .get(voteController.getAVote)
    .put(voteController.updateAVote)
    .delete(voteController.deleteAVote)

// /music/:id_music/vote

router
    .route('/music/:id_music/vote')
    .get(voteController.listAllVote)
    .post(voteController.createAVote);

module.exports = router;
    