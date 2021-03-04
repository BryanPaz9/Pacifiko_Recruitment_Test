'use strict'

var express = require("express");

const OptimizationController = require('../controllers/optimization.controller');
var api = express.Router();
api.get('/prime-number/:number',OptimizationController.isPrimeNumber);
api.get('/consecutive-sum/:n',OptimizationController.consecutiveSum);

module.exports = api;