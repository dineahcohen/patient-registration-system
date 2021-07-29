const router = require('express').Router();
const Appointment = require('../models/appointment')


// router.route('/').get((req, res) => {
//     console.log(req.body);
//     Appointment.find(req.body.user)
//         .then(appointment => res.json(appointment))
//         .catch(err => res.status(400).json('Error: ' + err))
// });

router.route('/add').post((req, res) => {
    const { purpose, date, time, user } = req.body;

    const newAppointment = new Appointment({
        user,
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
    Appointment.find({ user: req.params.id }, function (err, docs) {
        console.log(docs);
        if (err) {
            res.sendStatus(500);
        }
        res.json(docs);
    });


});


module.exports = router;