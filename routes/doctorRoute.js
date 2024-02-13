const route = require("express").Router();
const { readall } = require("../controller/doctorController");

route.get('/all',readall);