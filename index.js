const cron = require("node-cron");
const express = require("express");
const nodeMailer = require("nodemailer");
let testAccount = nodeMailer.createTestAccount();

cron.schedule("* * * * *", function() {
  console.log("Running Cron Job");
});

let transponder = nodeMailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "jayne90@ethereal.email",
    pass: "ppftSy1aQcTssGphUC"
  }
});

const mailOptations = {
  from: ' "Bunny Coder" <bunny.coder@example.com>', // sender address
  to: "aniket.umbc@gmail.com", // list of receivers
  subject: "Hello there!", // Subject line
  text: "A Message from Node Cron App", // plain text body
  html: "<h1>A Message from Node Cron App</h1>" // html body
};

transponder.sendMail(mailOptations, function(err, info) {
  console.log(info.messageId);
  if (err) {
    console.log(err);
  }
});

app = express();
app.listen(8000);
