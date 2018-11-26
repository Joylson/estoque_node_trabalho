const EntradaSaida = require('../models/EntradaSaida');



const controller = {};

controller.criar = function (req, res) {
    EntradaSaida.create(req.body).then(
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
    EntradaSaida.find().populate('produto').populate('usuario').exec().then(
        function (entradaSaidas) {
            res.json(entradaSaidas).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

controller.buscarId = function (req, res) {
    EntradaSaida.findById(req.params.id).populate('produto').populate('usuario').exec().then(
        function (entradaSaidas) {
            if (entradaSaidas != null) {
                res.json(entradaSaidas).end();
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

controller.buscarUsuario = function (req, res) {
    EntradaSaida.find({'usuario': { '_id': req.params.id }})
    .populate('produto').populate('usuario').exec().then(
        function (entradaSaidas) {
            if (entradaSaidas.length > 0) {
                res.json(entradaSaidas).end();
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

controller.buscarProduto = function (req, res) {
    EntradaSaida.find({'produto': { '_id': req.params.id }}).populate('produto').populate('usuario').exec().then(
        function (entradaSaidas) {
            if (entradaSaidas.length > 0) {
                res.json(entradaSaidas).end();
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
    EntradaSaida.findByIdAndUpdate(req.params.id, req.body).exec().then(
        function (EntradaSaida) {
            res.json(EntradaSaida).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );

};

controller.delete = function (req, res) {
    EntradaSaida.findByIdAndRemove(req.params.id).exec().then(
        function (EntradaSaida) {
            res.json(EntradaSaida).status(204).end();
        },
        function (erro) {
            console.log(erro);
            res.status(500).end();
        }
    );
};

module.exports = controller;