const mailgun = require("mailgun-js");
const config = require("./config")
const fs = require("fs");
const path = require("path");
const mg = mailgun({apiKey: config.mailgunApiKey, domain: config.mailgunDomain});


function createMessageTextBody(name, checkbox, comment, stlFilePriceData) {
    let messageBody = ` Имя: ${name}
                        Телефон: ${phone}
                        Перезвонить: ${checkbox}
                        
                        Сообщение: ${comment} `

    if (stlFilePriceData) {
        let jsonStlFileData = JSON.parse(stlFilePriceData)
        messageBody += `
        обьем ${jsonStlFileData["volume"]}
        x ${jsonStlFileData["x"]}
        y ${jsonStlFileData["y"]}
        z ${jsonStlFileData["z"]}
        вес ${jsonStlFileData["weight"]}
        
        PLA ${jsonStlFileData["basicFdm"]}
        FORMAX ${jsonStlFileData["forMax"]}
        фотополимер ${jsonStlFileData["basicPhoto"]}
        выжигаемый ${jsonStlFileData["burnPhoto"]}
        нейлон ${jsonStlFileData["nylon"]}
        `
    return messageBody
}


// name, email, subject, phone, checkbox, files, comment, stlFilePriceData
function sendMail (...args) {


    messageBody = createMessageTextBody(args.name, args.checkbox, args.comment, args.stlFilePriceData)
    let mail = {
	    from: args.email,
	    to: 'feedmetal1989@gmail.com',
	    subject: args.subject,
	    text: messageBody
    };


    console.log(files)

    if (files.length > 0) {
        files.forEach(function (file) {
            let fileName = file.originalname
            // let filePath = file.path
            mail["attachments"] = path.join("./uploads", fileName);
        })
    }

    console.log(mail, "mail")
    mg.messages().send(mail, function (error, body) {
        try {
            console.log(body);
        } catch (e) {
            console.log(e);
        }
    });
}

module.exports = sendMail