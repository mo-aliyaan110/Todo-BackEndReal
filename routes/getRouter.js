const Express = require('express');
const Router = Express.Router();
const NewLists = require('../Models/NewPostSchema');

Router.get('/', async(req, res) => {
    try{
        const listData = await NewLists.find();
        res.json(listData);
    }catch(err){
        res.send({Error : err});
    }
})


Router.get('/:id', async(req, res) => {
    try{
        const found = await NewLists.findById(req.params.id);
        res.json({Success : found});
    }catch(err){
        res.send({Error : err});
        console.log(err);
    }
})

module.exports = Router;