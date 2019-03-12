const { Router } = require("express");
const Class = require("./model");
const Response = require('../responses/model')
const Sequelize = require("sequelize");
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

   router.get('/classes/:id', async function (req, res, next) {
  
    const ClassId = req.params.id
     const Energy = await Response
    .sequelize.query(`SELECT AVG(answer),response_time  FROM responses where class_id = ${ClassId} AND question_id = 1  group by response_time; `, Response)
    .then(average => {
      return average[0]
    }).catch(function (err) {
      return next(err);
    })
    //console.log(query1)

    const Engagement =  await Response
    .sequelize.query(`SELECT AVG(answer),response_time  FROM responses where class_id = ${ClassId} AND question_id =2  group by response_time; `, Response)
    .then(average => {
       return average[0]
    })
    .catch(function (err) {
      return next(err);
    })
       //console.log('query2',query2)

    const Happiness = await Response
    .sequelize.query(`SELECT AVG(answer),response_time  FROM responses where class_id = ${ClassId} AND question_id = 3  group by response_time; `, Response)
    .then(average => {
       return average[0]
    })
    .catch(function (err) {
      return next(err);
    })

    return res.status(200).send( {Energy, Engagement, Happiness} ) 
  });

  
     
   module.exports = router
