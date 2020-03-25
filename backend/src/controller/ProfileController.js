const connection = require("../database/connections");
module.exports = {
    async Index(request, response){
        const id = request.headers.authorization;
        const incidents = await connection('incidents').where({ong_id: id}).select('*');
        if(incidents.length == 0){
            return response.status(401).json({error: "Não Encontrado"})
        }
        return response.json(incidents);
    },
}