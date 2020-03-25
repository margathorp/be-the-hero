const crypto = require('crypto');
const connection = require("../database/connections");
module.exports = {
    async Create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({
            id
        });         
    },

    async Index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async GetById(request, response){
        const id = request.params;
        const ong = await connection('ongs').where({id: id.id}).select('*');
        return response.json(ong);
    }
};