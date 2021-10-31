//CREATE - cria um novo registo
exports.create = (req, res) =>{
    console.log('Create');
    if (!req.body){
        return res.status(400).send({
            message: "O conteúdo não pode ser vazio!",
        });
    }
    return res.send({
        message: "Criou um novo registo!",
    });
};

//Envia todas as disciplinas 
exports.findAll = (req, res) => {
    console.log("FindAll");
    console.log("Mensagem de debug - listar disciplinas");
    let conteudo ={};
    conteudo = [
        {
            Nome: "Desenvolvimento Web",
            Docente:"Laercio Cruvinel",
        },
        {
            Nome: "Sistemas Digitais",
            Docente:"Joaquim Cunha Viana",
        },
        {
            Nome: "Inteligência Artificial",
            Docente:"Gonçalo Valadão",
        },
    ];
    if(JSON.stringify(conteudo)==='{}'){
        return res.status(400).send({message: "Não há disciplinas para mostrar!"});
    }
    return res.send(conteudo);
};

//READ one - busca o item com um certo id (chave primária)
exports.findOne = (req, res) => {

};

//UPDATE one - atualiza o item com o id recebido
exports.update = (req, res) => {

}

//DELETE all - elimina todos os itens
exports.deleteAll = (req,res) => {

} 

//READ with condition - encontra todos os itens com uma certa condição = true
exports.findAllPublished = (req,res) => {
    console.log("FindAllPublished");
    return res.send({
        Nome:"Desenvolvimento Web",
        Docente:"Laercio Cruvinel",
    });
};