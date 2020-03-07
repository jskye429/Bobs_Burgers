const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


router.get('/', function (req, res) {
    res.send('hello world')
  }) 

  router.get('/', (req, res) => {
    burger.all((data) => {
         {
           
        };
        res.render('index');
    });
});


// router.post


// router.put



module.export = router;