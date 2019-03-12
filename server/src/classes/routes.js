const { Router } = require("express");
const Class = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.get('/classes', function (req, res, next) {
  Class.findAll()
    .then(classes => {
      res.json({ classes })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err
      })
    })
 })
 
 module.exports = router;