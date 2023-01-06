const express = require('express');
const tasksModel = require('../models/tasks');

const tasksRoutes = express.Router();

tasksRoutes.get('/', async (req, res)=>{
    const data = await tasksModel.findAll();

    res.json({status:200, data});
});

tasksRoutes.get('/:id', async (req,res)=>{
    const data = await tasksModel.findOne({
        where:{
            id:req.params.id
        }
    });

    res.json({status:200, data})
});

tasksRoutes.post("/create", async(req, res)=>{
    const data = await tasksModel.create(req.body);

    res.json({status:200, data});
});

tasksRoutes.put('/:id', async(req,res)=>{
    const data = await tasksModel.update(req.body, {
        where:{
            id:req.params.id
        }
    });

    res.json({status: 200, data});
});

tasksRoutes.delete("/:id", async(req,res)=>{
    const data = await tasksModel.destroy({
        where:{
            id:req.params.id
        }
    });

    res.json({status:200, data})
});

module.exports = tasksRoutes;