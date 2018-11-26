const controller = require('../controllers/Produto');
const express = require('express');
const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarId);
router.get('/buscarDescricao/:descricao', controller.buscarDescricao);
router.get('/buscarSetor/:id_setor', controller.buscarSetor);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.delete);

module.exports = router;