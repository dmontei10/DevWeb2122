module.exports = app => {
    const crudrest = require("../controladores/pratica01.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", crudrest.create);
  
    // Retrieve all Tutorials
    router.get("/", crudrest.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", crudrest.findAllMarked);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", crudrest.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", crudrest.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", crudrest.delete);
  
    // Create a new Tutorial
    router.delete("/", crudrest.deleteAll);
  
    app.use('/api/crudrest', router);
  }