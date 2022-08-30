const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    contentTodo : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Lists', PostSchema);