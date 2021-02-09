const mongoose = require('mongoose');

const DebtSchema = new mongoose.Schema({
    usuario: {
        type: { id: Number, name: String },
        required: true,
    },
    motivo: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    valor: {
        type: Number,
        required: true
    },
});

mongoose.model('Debt', DebtSchema);