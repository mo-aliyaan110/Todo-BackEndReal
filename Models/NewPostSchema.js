const mongoose = require('mongoose');


const NewPostSchema = mongoose.Schema({
    content : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('NewLists', NewPostSchema);