const { Router } = require('express');
const User = require('./model');
const bcrypt = require('bcrypt');

const router = new Router();

router.post('/users', (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    }

    User
        .create(user)
        .then(entity => {
            res.send({
                id: entity.id,
                email: entity.email,
                userName: entity.user_name
            })
        }).catch(error => {
        console.error(error);
        res.status(500).send({
            message: 'Something went wrong'
        })
    })
});


module.exports = router;