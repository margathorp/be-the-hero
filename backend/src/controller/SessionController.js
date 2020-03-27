const connection = require("../database/connections");
module.exports = {
    async create(request, response){
        const {id} = request.body;
        const ong = await connection('ongs')
            .where({id : id})
            .first('name');
            if(!ong){
                return response.status(400).json({error : "não encontrado"})
            }
            return response.json(ong);
    }
}
