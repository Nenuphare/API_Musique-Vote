const Music = require('../models/musicModel');

exports.listAllMusic = async (req, res) => {

    try {
        const music = await Music.find({});
        res.status(200).json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while retriving data'});
    }

}
exports.findAMusic = async (req, res) => {

    try {
        const music = await Music.findById(req.params.id_music);
        res.status(200).json(music);
    } catch (error) {
        res.status(500)
        console.log(error);
        res.json({message: "Error while retriving the data"})
    }
}

exports.createAMusic = async (req, res) => {

    const newMusic = new Music(req.body);
    try {
        const music = await newMusic.save();
        res.status(201).json(music);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while creating data'});
    }
}

exports.updateAMusic = async (req, res) => {

    try {
        const music = await Music.findByIdAndUpdate(req.params.id_music, req.body, {new: true});
        res.status(200).json(music);
    } catch (error) {
        
    }
}

exports.deleteAMusic  = async (req, res) => {

    try {
        const music = await Music.findByIdAndDelete(req.params.id_music);
        res.status(200).json({message: "Proposition de musique supprimée"});
    } catch(error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur while deleting data'});
    }
}