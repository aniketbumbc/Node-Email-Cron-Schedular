const cron = require("node-cron");
const express = require("express");
const nodeMailer = require("nodemailer");
let testAccount = nodeMailer.createTestAccount();

cron.schedule("* * * * *", function () {
      console.log("Running Cron Job");
      })


app = express();
app.listen(8000);