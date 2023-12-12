const express =require('express')
const router=express.Router()
const {GetFavs,  AddFav,  DeleteFav }=require('../controller/favcontroller')
router.get('/GetFavourites/:id', GetFavs);
router.post('/AddToFavourites', AddFav);
router.delete('/DeleteFromFavourites/', DeleteFav);

module.exports=router;