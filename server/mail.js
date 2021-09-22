// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

//
//
// const auth = {
//         auth: {
//             api_key: 'd17003e9018bc0751a8ebb620c0ae536-a3c55839-c88c5e63',
//             domain: 'sandbox9ad8c4ce7ab94f649d09b745cc4811a2.mailgun.org'
//         }
//     };
//
// const transporter = nodemailer.createTransport(mailGun(auth));
// const sendMail = (name, email, subject, phone, checkbox,files, comment) => {
//
//     let fileName,
//         mailOptions,
//         filePath;
//
//     console.log(name, email, subject, phone, files)
//     if (files.length === 0) {
//         mailOptions = {
//             sender: name,
//             from: email,
//             to: 'feedmetal1989@gmail.com',
//             subject: subject,
//             text: comment,
//             phone: phone
//         }
//     } else {
//       files.forEach(function(file) {
//            fileName = file.originalname
//            filePath = file.path
//
//         mailOptions = {
//             sender: name,
//             from: email,
//             to: 'feedmetal1989@gmail.com',
//             subject: subject,
//             text: comment,
//             phone: phone,
//             attachments: [{
//                 filename: fileName,
//                 content: fs.createReadStream(filePath)
//             }]
//         };
//       })
//     }
//     console.log(mailOptions)
//     transporter.sendMail(mailOptions)
//         .then( res => { console.log("this is response", res)})
//         .catch( err => {console.log("this is error", err)});
// }
//
// module.exports = sendMail;


const mailgun = require("mailgun-js");
const fs = require("fs");
const path = require("path");
const mg = mailgun({apiKey: "d17003e9018bc0751a8ebb620c0ae536-a3c55839-c88c5e63", domain: "sandbox9ad8c4ce7ab94f649d09b745cc4811a2.mailgun.org"});


function sendMail (name, email, subject, phone, checkbox,files, comment) {

    const messageBody = `
        Имя: ${name}
        Телефон: ${phone}
        Перезвонить: ${checkbox}
        
        Сообщение: ${comment}
    `

    const data = {
	    from: email,
	    to: 'feedmetal1989@gmail.com',
	    subject: subject,
	    text: messageBody
    };

    if (files.length > 0) {
        files.forEach(function (file) {
            let fileName = file.originalname
            // let filePath = file.path
            data["attachments"] = path.join("./uploads", fileName);
        })
    }

    console.log(data, "data")

    mg.messages().send(data, function (error, body) {
        try {
            console.log(body);
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = sendMail