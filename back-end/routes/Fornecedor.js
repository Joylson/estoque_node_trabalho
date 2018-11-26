const controller = require('../controllers/Fornecedor');
const express = require('express');
const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarId);
router.get('/buscarRazaoSocial/:razao_social', controller.buscarRazaoSocial);
router.get('/buscarCnpj/:cnpj', controller.buscarCnpj);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.delete);

module.exports = router;