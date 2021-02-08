const mongoose = require('mongoose');

const Debt = mongoose.model('Debt');

module.exports = {
    async index(req, res) {
        const debts = await Debt.find({});

        return res.json(debts);
    },

    async show(req, res) {
        const debt = await Debt.findById(req.params.id);

        return res.json(debt);
    },

    async store(req, res) {
        const debt = await Debt.create(req.body);

        return res.json(debt);
    },

    async update(req, res) {
        const debt = await Debt.findByIdAndUpdate(req.params.id, req.body, { new: true} );

        return res.json(debt);
    },

    async destroy(req, res) {
        await Debt.findByIdAndDelete(req.params.id, function(err, data) {
            if(err)
                return res.send(err);

            return res.send();
        });
    }
};