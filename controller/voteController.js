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

exports.findAVote = async (req, res) => {
    try {
        const vote = await Vote.findById( req.params.id_vote);
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
        const note = req.body.note;

        if (note <= 5 && note >=1){
            try {
                const vote = await newVote.save();
                res.status(201).json(vote);
            } catch (error) {
                res.status(500).json({message: "Error while creating data (db error)"});
            }
        }else {
            res.status(500);
            console.log(error);
            res.json({message: 'Vote doit etre compris entre 1 et 5'});
        }

    } catch (error) {
        res.status(500).json({message: "Error while creating data (id does not exist"});
    }
}

exports.updateAVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndUpdate(req.params.id_vote, req.body, {new: true});
        res.status(200).json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while updating data'});
    }
}

exports.deleteAVote = async (req, res) => {
    try {
        const vote = await Vote.findByIdAndDelete(req.params.id_vote);
        res.status(200).json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while updating data'});
    }
}



