const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: String
    },
    purpose: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    collection: 'apppointments'
})

module.exports = mongoose.model('Appointment', appointmentSchema);