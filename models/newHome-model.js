const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewHome = new Schema(
    {
        title: { type: String, required: true },
        generalInfo: { type: String, required: true },
        category: { type: String, required: false },
        reporter: { type: String, required: false },
    },
    { timestamps: true },   // Date post
)

module.exports = mongoose.model('news', NewHome)
