const mongoose = require('mongoose');
const { Schema } = mongoose;
//questions schema
const questionSchema = new Schema({
    title: {
        type: String
    },
    description: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    answer: String
});

module.exports = mongoose.model('Question', questionSchema);