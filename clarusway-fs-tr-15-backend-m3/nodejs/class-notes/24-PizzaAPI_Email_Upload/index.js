"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i jsonwebtoken
    $ npm i nodemailer multer
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());


// Accept Form-Data:
app.use(express.urlencoded({ extended: true }))

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
//! EMAİL :
//! nodemailer
//* https://www.nodemailer.com/
//* https://www.npmjs.com/package/nodemailer
//* https://ethereal.email/

// const nodemailer = require("nodemailer");

// Create Test (Fake) Account

// nodemailer.createTestAccount().then(data=>console.log(data)) // aşağıdaki hesap bilgilerini aldıktan sonra yoruma aldım bu satırı

// {
//     user: 'hmzborg5q2iduvxu@ethereal.email',
//     pass: 'zA4zQp2eYRFc6zjT21',
//     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//     imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//     pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//     web: 'https://ethereal.email'
//   }

// Connect to MailServer
// SMTP (Simple Mail Transfer Protocol): E-posta gönderimi için kullanılan bir protokoldür. E-posta sunucuları arasında e-posta iletimini sağlar ve kullanıcıların e-posta göndermelerine olanak tanır. Genellikle e-posta gönderme işlemleri için kullanılır.
// IMAP (Internet Message Access Protocol): E-posta alımı için kullanılan bir protokoldür. Kullanıcıların e-posta sunucusundaki mesajlarına çeşitli cihazlardan erişmelerine olanak tanır. E-postalar sunucuda saklanır, böylece kullanıcılar farklı cihazlardan e-postalarını yönetebilir ve okuyabilir.
// POP3 (Post Office Protocol version 3): Bir diğer e-posta alım protokolüdür. IMAP'e benzer şekilde, kullanıcıların e-posta sunucusundaki mesajlarına erişmelerini sağlar. Ancak, POP3 genellikle e-postaları yerel cihaza indirir ve sunucudan siler. Bu, e-postaların genellikle sadece indirildiği cihazda erişilebilir olduğu anlamına gelir.
// Kısacası, SMTP e-posta göndermek için, IMAP ve POP3 ise e-posta almak için kullanılan protokollerdir. IMAP, e-postaların sunucuda saklanmasını ve birden fazla cihazdan erişilebilmesini sağlarken, POP3 e-postaları yerel bir cihaza indirip sunucudan siler.
// const transporter = nodemailer.createTransport({
//   // SMTP:
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // ssl , tls
//   auth: {
//     user: "hmzborg5q2iduvxu@ethereal.email",
//     pass: "zA4zQp2eYRFc6zjT21",
//   },
// });
// console.log(transporter)
// SendMail

// transporter.sendMail({
//     from: "hmzborg5q2iduvxu@ethereal.email",
//     to: 'mehmet20132204@gmail.com', // aa@aa.com, bb@bb.com
//     subject:'hello',
//     text: 'Hello There. How are you Today?',
//     html:'<b>Hello There</b> <p>How are you?</p>'
// },(error, success)=>success ? console.log('SUCCESS', success): console.log('ERROR',error))

// //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "mehmet20132204@gmail.com",
//     pass: "dfyh uzhc qmdt jtpi",
//   },
// });

// // SendMail
// transporter.sendMail(
//   {
//     from: "mehmet20132204@gmail.com",
//     to: "mehmet20132204@gmail.com",
//     subject: "hello",
//     text: "Hello There. How are you Today?",
//     html: "<b>Hello There</b> <p>How are you?</p>",
//   },
//   (error, success) => console.log(success, error)
// );

// //? YandexMail (yandex):
// const transporter = nodemailer.createTransport({
//     service: 'Yandex',
//     auth: {
//         user: 'username@yandex.com',
//         pass: 'password' // your emailPassword
//     }
// })
/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});


//Static files
app.use('/uploads', express.static('./uploads'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
