const mongoose = require('mongoose');

const schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    unidade: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    fornecedor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Fornecedor',
        required: true
    },
    setor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Setor',
        required: true
    },
    validade: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Produto', schema, 'produto');