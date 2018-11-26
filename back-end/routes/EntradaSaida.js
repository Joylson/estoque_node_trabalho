const controller = require('../controllers/EntrdaSaida');
const express = require('express');
const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarId);
router.get('/buscarUsuario/:id', controller.buscarUsuario);
router.get('/buscarProduto/:id', controller.buscarProduto);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.delete);

module.exports = router;