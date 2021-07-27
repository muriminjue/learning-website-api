const nodemailer = require("nodemailer");

const dotenv = require('dotenv')

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "lim106.truehost.cloud",
  secureConnection: true,
  port: 465,
  auth: {
    user: "no-reply@rabbii.co.ke",
    pass: process.env.password,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

module.exports =  transporter;
