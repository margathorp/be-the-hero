const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação
  * PUT:  Alterar informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**
   * Tipos de parâmetros:
   * Query Params: ?nome=João (Filtros/Paginação/)& para separar parâmetros
   * Route Params: Utilizado para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recurso
   */

   /**
    * nodemon 
    * executa projeto like angular
    * npm install nodemon -D 
    * instala somente para dev
    *alterar package.json 
      "scripts": {
    "start": "nodemon index.js"
  },     
   */

   /**
    * Banco de dados:
    * DRIVER SELECT * FROM
    * Query Builder 
    * 
    */




app.listen(3333);
