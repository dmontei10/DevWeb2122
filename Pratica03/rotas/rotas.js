module.exports = app => {
    const controlador = require("../controladores/controller");

    var router = require("express").Router();

    //Create a new Tutorial
    router.post("/", controlador.create);

    //Envia lista de disciplinas e docentes associados
    router.get("/", controlador.findAll);

    //Retrieve all published Tutorials
    router.get("/", controlador.findAllPublished);

    //Retrieve a single Tutorial with id
    router.get("/:id", controlador.findOne);

    //Update a Tutorial with id
    router.put("/:id", controlador.update);

    //Delete a Tutorial with id
    router.delete("/:id", controlador.delete);

    //Delete all published Tutorials
    router.delete("/", controlador.deleteAll);

    app.use('/api/disciplinas', router);
}