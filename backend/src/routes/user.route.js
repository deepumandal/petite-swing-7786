const express = require('express');

userRoute.use(express.Router());

userRoute.use(express.json());

module.exports = userRoute ;