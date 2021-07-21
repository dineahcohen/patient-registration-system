const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const userSchema = require('../models/users');

/**
 * Sign In
 */
router.post('/login', (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Auth Failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password)
    })
        .then(response => {
            if (!response) {
                return res.status(401).json({
                    message: "Auth Failed"
                });
            }
            let jwtToken = jwt.sign({
                email: getUser.email,
                userId: getUser._id
            }, "longer-secret-is-better", {
                expiry: "2h"
            });
            res.status(200).json({
                token: jwtToken,
                expiresIn: 6600,
                msg: getUser
            })
                .catch((err) => {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    })
                })
        })
})