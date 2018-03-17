var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Client = require('../models/Client');

/* GET ALL CLIENTS */
router.get('/', function(req, res, next) {
  Client.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CLIENT BY ID */
router.get('/:id', function(req, res, next) {
  Client.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CLIENT */
router.post('/', function(req, res, next) {
  Client.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CLIENT */
router.put('/:id', function(req, res, next) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CLIENT */
router.delete('/:id', function(req, res, next) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
