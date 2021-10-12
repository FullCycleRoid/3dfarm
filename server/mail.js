const mailgun = require("mailgun-js");
const config = require("./config")
const fs = require("fs");
const path = require("path");
const mg = mailgun({apiKey: config.mailgunApiKey, domain: config.mailgunDomain});


let messageBody

function createMessageTextBody(name, checkbox, comment, stlFilePriceData) {
    messageBody = `     Имя: ${name}
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
}


function sendMail(name, email, phone, checkbox, file, comment, stlFileData) {


    let subject = phone + name

    messageBody = createMessageTextBody(name, checkbox, comment, stlFileData)

    let mail = {
        from: email,
        to: 'feedmetal1989@gmail.com',
        subject: subject,
        text: messageBody
    };


    console.log(file)
    if (file) {
        let fileName = file.originalname
        mail["attachments"] = path.join("./uploads", fileName);
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