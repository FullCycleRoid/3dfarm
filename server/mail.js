const mailgun = require("mailgun-js");
const config = require("./config")
const fs = require("fs");
const path = require("path");
const mg = mailgun({apiKey: config.mailgunApiKey, domain: config.mailgunDomain});


function sendMail (name, email, subject, phone, checkbox,files, comment, fileCalculationData) {

    let messageBody = `
        Имя: ${name}
        Телефон: ${phone}
        Перезвонить: ${checkbox}
        
        Сообщение: ${comment}
    `

    if (fileCalculationData) {
        let parseData = JSON.parse(fileCalculationData)
        messageBody += `
            обьем ${parseData["volume"]}
            x ${parseData["x"]}
            y ${parseData["y"]}
            z ${parseData["z"]}
            вес ${parseData["weight"]}
            
            PLA ${parseData["basicFdm"]}
            FORMAX ${parseData["forMax"]}
            фотополимер ${parseData["basicPhoto"]}
            выжигаемый ${parseData["burnPhoto"]}
            нейлон ${parseData["nylon"]}
        `
    }

    console.log(files)
    let data = {
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