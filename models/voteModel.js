const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema ({
    note: {
        type: Number,
        default: "1"
    
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    id_music: {
        type: String
    }
});
module.exports = mongoose.model('Vote', voteSchema);