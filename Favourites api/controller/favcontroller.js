const repo =require('../repository/favrepo')
function GetFavs(req, res) {
    repo.GetFavs(req.params.id).then(data => {
        res.status(200).send(data);
    });
}
function AddFav(req, res) {
    repo.AddFav(req.body).then(data => {
        res.status(201).send("Fav added successfully");
    });
}



function DeleteFav(req, res) {
    repo.DeleteFav(req.query.email,req.query.q).then(data => {
        res.status(200).send("Fav deleted successfully");
    });
}
module.exports = { GetFavs,  AddFav,  DeleteFav };