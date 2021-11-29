const db = require("../models/nedb"); // Define o MODEL que vamos usar

// CREATE - cria um novo registo
exports.create = (req, res) => {
  console.log("Create");
  if (!req.body) {
    return res.status(400).send({
      message: "O conteúdo não pode ser vazio!",
    });
  }
  const data = req.body;
  db.Crud(data); // C: Create
  const resposta = { message: "Criou um novo registo!" };
  console.log(resposta);
  return res.send(resposta);
};

// Envia todas as disciplinas
exports.findAll = (req, res) => {
  console.log("FindAll");
  console.log("Mensagem de debug - listar disciplinas");
  db.cRud_all() // R: Read
    .then((dados) => {
      res.send(dados);
      // console.log("Dados: " + JSON.stringify(dados)); // para debug
    })
    .catch((err) => {
      return res
        .status(400)
        .send({ message: "Não há disciplinas para mostrar!" });
    });
};

// READ one - busca um item pelo id
exports.findOne = async (req, res) => {
  console.log("Find One by id");
  console.log("Parâmetro: " + req.params.id);
  //Deve implementar esta funcionalidade...
  const id = req.params.id.substr(1); // faz substring a partir do segundo carater
  db.cRud_id(id) // R: Read
    .then((dados) => {
      res.send(dados);
      // console.log("Dados: " + JSON.stringify(dados)); // para debug
    })
    .catch((err) => {
      return res
        .status(400)
        .send({ message: "Não há disciplinas para mostrar!" });
    });
};

// READ key - busca os itens que contêm uma chave
exports.findKey = (req, res) => {
  console.log("Find key");
  // Temos de eliminar o primeiro carater para obter a chave de pesquisa
  // O primeiro carater é o ":"
  const criteria = req.params.id.substr(1); // faz substring a partir do segundo carater
  console.log("Critério: " + criteria);
  db.cRud_key(criteria) // R: Read
    .then((dados) => {
      res.send(dados);
      // console.log("Dados: " + JSON.stringify(dados)); // para debug
    })
    .catch((err) => {
      return res
        .status(400)
        .send({ });
    });
};

// UPDATE - atualiza o item com o id recebido
exports.update = (req, res) => {};

// DELETE one - elimina o item com o id recebido
exports.delete = (req, res) => {};

// DELETE all - elimina todos os itens
exports.deleteAll = (req, res) => {};

// READ with condition - encontra todos os itens com uma certa condição = true
exports.findAllPublished = (req, res) => {
  console.log("FindAllPublished");
  return res.send({
    Nome: "Desenvolvimento Web",
    Docente: "Laercio Cruvinel",
  });
};