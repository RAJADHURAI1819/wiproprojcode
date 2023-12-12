const mongoose = require('mongoose');
const favsSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    source: {
        type: Object,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    url:{
        type: String,
        require: true
    },
    urlToImage:{
        type: String,
        require: true
    },
    publishedAt:{
        type: String,
        require: true
    },
    content:{
        type: String,
        require: true
    }
    
});

module.exports = mongoose.model('FavModel', favsSchema, 'favs');