require("dotenv").config();
const jwtMiddleware = require("express-jwt");
const express = require("express");
const jwtSecret = process.env.JWT_SECRET;
const UserService = require("../services/UserService");

const authRouter = express.Router();


