const database = require("nedb");
const db = new database("database.db");
db.loadDatabase();

exports.Crud = (data) => {
  // insere um registo
  db.insert(data);
  console.log(JSON.stringify(data));
};

exports.cRud_all = () => {
  return new Promise((resolve, reject) => {
    // lê todos os registos
    db.find({}, (err, dados) => {
      if (err) {
        reject("Não há disciplinas para mostrar!");
      } else {
        resolve(dados);
      }
    });
  });
};

exports.cRud_id = (id) => {
  return new Promise((resolve, reject) => {
    // busca os registos que contêm a chave
    db.find(
      {
        _id: id,
      },
      (err, dados) => {
        if (err) {
          reject("Disciplina com o id " + id + " não encontrada!");
        } else {
          resolve(dados);
        }
      }
    );
  });
};

exports.cRud_key = (criteria) => {
  return new Promise((resolve, reject) => {
    // busca os registos que contêm a chave
    db.find(
      {
        $or: [
          {
            disciplina: new RegExp(criteria), // RegExp é para usar como expressão regular /criterio/
          },
          {
            docente: new RegExp(criteria),
          },
          {
            curso: new RegExp(criteria),
          },
          {
            ano: Number(criteria),
          },
        ],
      },
      (err, dados) => {
        if ( err || Object.keys(dados).length == 0 ) {
          reject("Não posso mostrar disciplinas!");
        } else {
          resolve(dados);
        }
      }
    );
  });
};

//module.exports = db;

/*db.insert({
  _id: "id01",
  disciplina: "Algoritmia e Programação",
  curso: "Informática de Gestão",
  ano: 1,
  docente: "Professores André Sabino e Inês Almeida",
}) 
db.insert({
    _id: "id02", 
    disciplina: "Modelação e Base de Dados", 
    curso: "Informática de Gestão", 
    ano: 1, 
    docente: "Professora Isabel Alvarez",
    })
db.insert({
    _id: "id03", 
    disciplina: "Introdução à Economia", 
    curso: "Informática de Gestão", 
    ano: 1, 
    docente: "Professora Sandra Ribeiro (diurno) Professor João Falcão Silva(Pós Laboral)",
    })
db.insert({
    _id: "id04", 
    disciplina: "Matemática I", 
    curso: "Informática de Gestão", 
    ano: 1, 
    docente: "Professores Joana Matos (Diurno) Lucian Radu Pós Laboral)",
    })
db.insert({
    _id: "id05", 
    disciplina: "Introdução à Gestão", 
    curso: "Informática de Gestão", 
    ano: 1, 
    docente: "Professora Vera Pedragosa (Diurno e Pós Laboral)",
    })
db.insert({
    _id: "id06", 
    disciplina: "Programação Orientada a Objectos", 
    curso: "Informática de Gestão", 
    ano: 2, 
    docente: "Professor André Sabino ",
    })
db.insert({
    _id: "id07", 
    disciplina: "Aplicação Base de Dados", 
    curso: "Informática de Gestão", 
    ano: 2, 
    docente: "Professora Valéria Pequeno",
    })
db.insert({
    _id: "id08", 
    disciplina: "Contabilidade de Gestão", 
    curso: "Informática de Gestão", 
    ano: 2, 
    docente: "Professoras Ana Barbosa (Diurno) e Sara Paralta (Pós-Laboral)",
    })
db.insert({
    _id: "id09", 
    disciplina: "Redes e Comunicações", 
    curso: "Informática de Gestão", 
    ano: 2, 
    docente: "Professores Mário Marques da Silva (Diurno e José Aleixo (Pós-Laboral)",
    })
db.insert({
    _id: "id10", 
    disciplina: "Noções Fundamentais do Direito", 
    curso: "Informática de Gestão", 
    ano: 2, 
    docente: "Professores Alfredo Mendes e Carlos Proença (Diurno) (Paulo Gomes (Pós Laboral)",
    })
db.insert({
    _id: "id11", 
    disciplina: "Desenvolvimento Web", 
    curso: "Informática de Gestão", 
    ano: 3, 
    docente: "Professore Laércio Cruvinel",
    })
db.insert({
    _id: "id12", 
    disciplina: "Gestão de Sistemas de Redes", 
    curso: "Informática de Gestão", 
    ano: 3, 
    docente: "Professor António Caldeira",
    })
db.insert({
    _id: "id13", 
    disciplina: "Gestão de Projectos", 
    curso: "Informática de Gestão", 
    ano: 3, 
    docente: "Professores Adriana Fernandes (Diurno) e  António Cabeças (Pós Laboral)",
    })
db.insert({
    _id: "id14", 
    disciplina: "Controlo de Gestão", 
    curso: "Informática de Gestão", 
    ano: 3, 
    docente: "Professoras Adriana Fernandes (Diurno) e Ana Quaresma (Pós laboral)",
    })
db.insert({
    _id: "id15", 
    disciplina: "Inteligencia Artificial", 
    curso: "Informática de Gestão", 
    ano: 3, 
    docente: "Professor Gonçalo Valadão",
    })
*/
