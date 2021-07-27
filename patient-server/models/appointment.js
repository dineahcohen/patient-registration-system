const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
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
},
    {
        timestamps: true,
    })

module.exports = mongoose.model('Appointment', appointmentSchema);