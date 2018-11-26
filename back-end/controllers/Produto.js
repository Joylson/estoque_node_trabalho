const Produto = require('../models/Produto');

const controller = {};

controller.criar = function (req, res) {
    console.log('setor:', req.body.setor);
    Produto.find({ 'setor': { '_id': req.body.setor } }).populate('setor').exec().then(
        function (produtos) {
            let count = 0;
            produtos.forEach(x => count += x.quantidade);
            if (produtos.length <= 0 || produtos[0].setor.disposicao_espaco >= count + req.body.quantidade) {
                Produto.create(req.body).then(
                    function () {
                        res.status(201).end();
                    },
                    function (erro) {
                        console.log(erro);
                        res.status(500).end();
                    }
                )
            }else{
                res.status(400).json('Espaço insuficiente no estoque!!').end();
            }
        }
    );
}

controller.listar = function (req, res) {
    Produto.find()
        .populate('setor')
        .populate('fornecedor').exec().then(
            function (produtos) {
                res.json(produtos).end();
            },
            function (erro) {
                console.log(erro);
                res.status(500).end();
            }
        );
};

controller.buscarId = function (req, res) {
    Produto.findById(req.params.id)
        .populate('setor')
        .populate('fornecedor').exec().then(
            function (produtos) {
                if (produtos != null) {
                    res.json(produtos).end();
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
    Produto.find({ 'descricao': req.params.descricao })
        .populate('setor')
        .populate('fornecedor').exec().then(
            function (produtos) {
                if (produtos.length > 0) {
                    res.json(produtos).end();
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

controller.buscarSetor = function (req, res) {
    console.log(req.params.id_setor);
    Produto.find({ 'setor': { '_id': req.params.id_setor } })
        .populate('setor')
        .populate('fornecedor').exec().then(
            function (produtos) {
                if (produtos.length > 0) {
                    res.json(produtos).end();
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

controller.atualizar = function (req, res) {
    Produto.findByIdAndUpdate(req.params.id, req.body).exec().then(
        function (Produto) {
            res.json(Produto).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

};

controller.delete = function (req, res) {
    Produto.findByIdAndRemove(req.params.id).exec().then(
        function (Produto) {
            res.json(Produto).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

module.exports = controller;