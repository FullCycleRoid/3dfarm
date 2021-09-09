const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const fs = require("fs");


const auth = {
        auth: {
            api_key: 'faa57614ea931d1ab1e4a07f52ceed9e-156db0f1-df2725bd',
            domain: 'sandbox504168fb1af84db19608a025e07e987f.mailgun.org'
        }
    };

const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (name, email, subject, phone, checkbox,file, comment) => {

    let mailOptions;
    if (file === "нет файла") {
        mailOptions = {
            sender: name,
            from: email,
            to: 'feedmetal89@gmail.com',
            subject: subject,
            text: comment,
            phone: phone
        }
    } else {
        mailOptions = {
            sender: name,
            from: email,
            to: 'feedmetal89@gmail.com',
            subject: subject,
            text: comment,
            phone: phone,
            attachments: [{
                filename: file["originalname"],
                content: fs.createReadStream(file.path)
            }]
        };
    }

    transporter.sendMail(mailOptions)
        .then( res => { console.log("this is response", res)})
        .catch( err => {console.log("this is error", err)});
}

module.exports = sendMail;
