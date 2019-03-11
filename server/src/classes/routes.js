const { Router } = require("express");
const Class = require("./model");
const bcrypt = require("bcrypt");
const CodClass = require('./model')

const router = new Router();

router.get('/classes', (req, res, next) => {
  
  CodClass.findAll()
    .then(codClasses => {
      res.json({ codClasses: codClasses })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong',
        error: err
      })
    })
  })