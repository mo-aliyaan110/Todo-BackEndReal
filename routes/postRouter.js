const Express = require('express');
const Router = Express.Router();
const NewLists = require('../Models/NewPostSchema');

// post
Router.post('/add', async(req, res) => {
    
    const insertedData = new NewLists({
        
        content : req.body.content,
    })

    try{
        const dataAdded = await insertedData.save();
        res.json({Success : dataAdded});
        
    }catch(err){
        res.send({Error : err});
        
    }
});

// delete
Router.delete('/delete/:id', async(req, res) => {
    try{
        const deleted  = await NewLists.findByIdAndDelete(req.params.id);
        res.json({Success : deleted});
    }catch(err){
        res.json({Error : err});
    }
})


// update
Router.put('/update/:id', async(req, res) => {
    try{
        const updatedOne = await NewLists.findByIdAndUpdate(req.params.id, {
            content : req.body.content
        })
        res.json({Success : updatedOne, updated : true});
    }catch(err){
        res.json({Error : err})
    }

    
})

module.exports = Router;