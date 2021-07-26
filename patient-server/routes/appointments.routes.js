const router = require('express').Router();
const Appointment = require('../models/appointment')


router.route('/').get((req, res) => {
    Appointment.find()
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const purpose = req.body.purpose;
    const date = req.body.date;
    const time = req.body.time;

    const newAppointment = new Appointment({
        name,
        purpose,
        date,
        time
    });

    newAppointment.save()
        .then(() => res.json('Appointment booked!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Appointment.findById(req.params.id)
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Appointment canceled.'))
        .catch(err => res.status(400).json('Error: ' + err));
});