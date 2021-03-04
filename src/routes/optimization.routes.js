'use strict'

var express = require("express");

const OptimizationController = require('../controllers/optimization.controller');
var api = express.Router();
api.post('/prime-number/:number',OptimizationController.isPrimeNumber);
api.post('/consecutive-sum/:n',OptimizationController.consecutiveSum);

module.exports = api;