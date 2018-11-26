const Setor = require('../models/Setor');
const Produto = require('../models/Produto');



const controller = {};

controller.criar = function (req, res) {
    Setor.create(req.body).then(
        function () {
            res.status(201).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
}

controller.listar = function (req, res) {
    Setor.find().populate('usuario').exec().then(
        function (setores) {
            res.json(setores).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.buscarId = function (req, res) {
    Setor.findById(req.params.id).populate('usuario').exec().then(
        function (setores) {
            if (setores != null) {
                res.json(setores).end();
            } else {
                res.status(400).end();
            }
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.buscarDescricao = function (req, res) {
    Setor.find({ 'descricao': req.params.descricao }).populate('usuario').exec().then(
        function (setores) {
            if (setores.length > 0) {
                res.json(setores).end();
            } else {
                res.status(400).end();
            }
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.informacoesEstoque = function(req,res){
    Setor.findById(req.params.id).exec().then(
        function(setor){
            Produto.find({'setor': {'_id': setor._id}}).exec().then(
                function(produtos){
                    let count = 0;
                    produtos.forEach(x => count += x.quantidade);
                    res.json({espaco_total: setor.disposicao_espaco, espaco_usado: count, espaco_restante: setor.disposicao_espaco - count}).end();
                },
                function(erro){
                    console.log(erro);
                    res.status(400).end();
                }
            );
        },
        function(erro){
            res.status(400).json('Setor inicistente!!').end();
        }
    );
};

controller.atualizar = function (req, res) {
    Setor.findByIdAndUpdate(req.params.id, req.body).exec().then(
        function (Setor) {
            res.json(Setor).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

};

controller.delete = function (req, res) {
    Setor.findByIdAndRemove(req.params.id).exec().then(
        function (Setor) {
            res.json(Setor).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

module.exports = controller;