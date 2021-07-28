const router = require('express').Router();
const Appointment = require('../models/appointment')


router.route('/').get((req, res) => {
    Appointment.find()
        .then(appointment => res.json(appointment))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const { purpose, date, time } = req.body;
    const newAppointment = new Appointment({
        user: req.body.user,
        purpose,
        date,
        time
    });
    newAppointment.save()
        .then((response) => res.json({
            message: "Appointment made!",
            result: response
        }
        ))
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

module.exports = router;