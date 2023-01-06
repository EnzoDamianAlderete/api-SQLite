const express = require('express');
const rolesModel = require('../models/roles');

const rolesRouter = express.Router();

rolesRouter.get('/', async (req, res)=>{
    const data = await rolesModel.findAll();

    res.json({status:200, data});
});

rolesRouter.get("/:id", async(req,res)=>{
    const data = await rolesModel.findOne({
        where:{
            id:req.params.id
        }
    });

    res.json({status:200, data});
});

rolesRouter.put('/:id', async (req,res)=>{
    const data = await rolesModel.update(req.body, {
        where:{
            id:req.params.id
        }
    });

    res.json({status:200, data});
});

rolesRouter.post('/create', async (req,res)=>{
    const data = await rolesModel.create(req.body);

    res.json({status:200, data});
});

rolesRouter.delete('/:id', async (req,res)=>{
    const data = await rolesModel.destroy({
        where:{
            id:req.params.id
        }
    });

    res.json({status:200, data});
});

module.exports = rolesRouter;