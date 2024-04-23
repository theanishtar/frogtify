const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
const axios = require('axios');
const { html } = require('html-template-tag');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

exports.signin = async (req, res) => {
  try {
    return res.json("hi");
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
};
