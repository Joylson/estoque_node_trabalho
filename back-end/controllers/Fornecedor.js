const Fornecedor = require('../models/Fornecedor');



const controller = {};

controller.criar = function (req, res) {
    Fornecedor.create(req.body).then(
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
    Fornecedor.find().exec().then(
        function (fornecedores) {
            res.json(fornecedores).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.buscarId = function (req, res) {
    Fornecedor.findById(req.params.id).exec().then(
        function (fornecedores) {
            if (fornecedores != null) {
                res.json(fornecedores).end();
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

controller.buscarRazaoSocial = function (req, res) {
    Fornecedor.find({ 'razao_social': req.params.razao_social }).exec().then(
        function (fornecedores) {
            if (fornecedores.length > 0) {
                res.json(fornecedores).end();
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

controller.buscarCnpj= function (req, res) {
    Fornecedor.find({ 'cnpj': req.params.cnpj }).exec().then(
        function (fornecedores) {
            if (fornecedores.length > 0) {
                res.json(fornecedores).end();
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
    Fornecedor.findByIdAndUpdate(req.params.id, req.body).exec().then(
        function (Fornecedor) {
            res.json(Fornecedor).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

};

controller.delete = function (req, res) {
    Fornecedor.findByIdAndRemove(req.params.id).exec().then(
        function (Fornecedor) {
            res.json(Fornecedor).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

module.exports = controller;