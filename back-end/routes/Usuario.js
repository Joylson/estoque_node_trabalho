const controller = require('../controllers/Usuario');
const express = require('express');
const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarId);
router.get('/buscarNome/:nome', controller.buscarNome);
router.post('/',controller.criar);
router.put('/:id',controller.atualizar);
router.delete('/:id',controller.delete);

module.exports = router;