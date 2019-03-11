const { Router } = require("express");
const Question = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();
