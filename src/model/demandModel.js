const mongosse = require('../config/database');
const mongoose = require('../config/database');

const Schema = mongosse.Schema;

const DemandSchema = new Schema({
    loja_id: { type: String, default: '111.111.111-11' },
    client: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    neighboard: { type: String, required: true },
    public_place: { type: String, required: true },
    done: { type: Boolean, default: false },
    created: { type: Date, default: Date.now()}
});

module.exports = mongosse.model('Demand', DemandSchema);

