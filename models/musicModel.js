const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let musicSchema = new Schema ({
    url: {
        type: String,
        required: true
    
    },
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Music', musicSchema);