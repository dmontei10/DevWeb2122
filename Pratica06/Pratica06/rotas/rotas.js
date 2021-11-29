module.exports = app => {
    const controlador = require("../controladores/controller.js");
  
    var router = require("express").Router();
  
    // Cria um novo registo
    router.post("/", controlador.create);
  
    // Envia lista de disciplinas e docentes associados
    router.get("/", controlador.findAll);
  
    // Busca todas as disciplinas ativas
    router.get("/published", controlador.findAllPublished);
  
    // Busca uma disciplina pelo id
    router.get("/:id", controlador.findOne);
  
    // Busca todas as disciplinas com uma chave de pesquisa
    router.get("/key/:id", controlador.findKey);

    // Update a Tutorial with id
    router.put("/:id", controlador.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", controlador.delete);
  
    // Create a new Tutorial
    router.delete("/", controlador.deleteAll);
   
    app.use('/api/disciplinas', router);
  };
  