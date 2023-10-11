const Vote = require('../models/voteModel');
const Music = require('../models/musicModel');

exports.listAllVote = async (req, res) => {

    try {
        const vote = await Vote.find({music_id: req.params.id_music});
        res.status(200).json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while retriving data'});
    }

}

exports.createAVote = async (req, res) => {
    try {
        await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id: req.params.id_music});
        try {
            const vote = await newVote.save();
            res.status(201).json(vote);
        } catch (error) {
            res.status(500).json({message: "Error while creating data (db error)"});
        }
    } catch (error) {
        res.status(500).json({message: "Error while creating data (id does not exist"});
    }
}