const mongoose = require('mongoose');

const schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    disposicao_espaco: {
        type: Number,
        required: true
    },
    usuario: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = mongoose.model('Setor', schema, 'setor');