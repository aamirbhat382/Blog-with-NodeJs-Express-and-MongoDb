const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articalSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    para1: { type: String, required: true },
    para2: { type: String },
    para3: { type: String }
})

module.exports = mongoose.model('articals', articalSchema)