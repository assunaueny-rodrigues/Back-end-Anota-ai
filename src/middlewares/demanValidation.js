const DemandModel = require('../model/demandModel');

const DemandValidation = async (req, res, next) => {
    const { client, title, description, street, number, neighboard, public_place } = req.body;

    if(!client)
        return res.status(400).json({error: 'O nome do cliente é obrigatório!'});
    else if(!title)
        return res.status(400).json({error: 'O nome do pedido é obrigatório!'});
    else if(!description)
        return res.status(400).json({error: 'A descrição do produto é obrigatória!'});
    else if(!street)
        return res.status(400).json({error: 'A rua é obrigatória!'});
    else if(!number)
        return res.status(400).json({error: 'O número da casa é obrigatório!'});
    else if(!neighboard)
        return res.status(400).json({error: 'O bairro é obrigatório!'});
    else if(!public_place)
        return res.status(400).json({error: 'O complemento é obrigatório!'});
    else
    next();
}

module.exports = DemandValidation;