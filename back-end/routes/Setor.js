const controller = require('../controllers/Setor');
const express = require('express');
const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarId);
router.get('/buscarDescricao/:descricao', controller.buscarDescricao);
router.get('/informacoesSetor/:id', controller.informacoesEstoque);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.delete);

module.exports = router;