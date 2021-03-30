const { response } = require('express');
const DemandModel = require('../model/demandModel');

class DemandController {
    async create(req, res){
        const demand = new DemandModel(req.body);
        await demand
            .save()
            .then(response =>{
                return res.status(200).json(response)                
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res){
        await DemandModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response =>{
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })        
    }

    async all(req, res){
        await DemandModel.find({ loja_id: {'$in': req.body.loja_id} })
            .sort('when')
            .then(response =>{
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
} 

module.exports = new DemandController();