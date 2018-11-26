const Usuario = require('../models/Usuario');



const controller = {};

controller.criar = function (req, res) {
    Usuario.create(req.body).then(
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
    Usuario.find().exec().then(
        function (usuarios) {
            res.json(usuarios).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.buscarId = function (req, res) {
    Usuario.findById(req.params.id).exec().then(
        function (usuarios) {
            if (usuarios != null) {
                res.json(usuarios).end();
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

controller.buscarNome = function (req, res) {
    Usuario.find({ 'nome': req.params.nome }).exec().then(
        function (usuarios) {
            if (usuarios.length > 0) {
                res.json(usuarios).end();
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
    Usuario.findByIdAndUpdate(req.params.id, req.body).exec().then(
        function (usuario) {
            res.json(usuario).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

};

controller.delete = function (req, res) {
    Usuario.findByIdAndRemove(req.params.id).exec().then(
        function (usuario) {
            res.json(usuario).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

module.exports = controller;