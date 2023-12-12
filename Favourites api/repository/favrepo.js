const FavModel =require('../model/favmodel')
const { v4: uuidv4 } = require('uuid');
function GetFavs(e) {
    return new Promise((resolve, reject) => {
        FavModel.find({email:e}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function AddFav(fav) {
    return new Promise((resolve, reject) => {
        let Fav = new FavModel({
            _id: uuidv4(),
            source:fav.source,
            email:fav.email,
            author:fav.author,
            title:fav.title,
            description:fav.description,
            url:fav.url,
            urlToImage:fav.urlToImage,
            publishedAt:fav.publishedAt,
            content:fav.content
        });
        Fav.save((err) => {
            if (!err) {
                resolve('Favourite  created successfully');
            } else {
                reject(err);
            }
        });
    });
}


function DeleteFav(email,id){
    return new Promise((resolve, reject) => {
        FavModel.deleteOne({ email:email,_id: id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { GetFavs,  AddFav,  DeleteFav};

