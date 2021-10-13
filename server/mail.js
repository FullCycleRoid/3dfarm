const mailgun = require("mailgun-js");
const config = require("./config")
const fs = require("fs");
const path = require("path");
const mg = mailgun({apiKey: config.mailgunApiKey, domain: config.mailgunDomain});



function createMessageTextBody(name, phone, checkbox, comment, stlFilePriceData) {
    let emailBody = `Имя: ${name}
                     Телефон: ${phone}
                     Перезвонить: ${checkbox}
                        
                     Сообщение: ${comment} `

    if (stlFilePriceData) {
        let jsonStlFileData = JSON.parse(stlFilePriceData)
        emailBody += `
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
    }
    return emailBody
}


function sendMail(name, email, phone, checkbox, file, comment, stlFileData) {


    let subject = phone + name

    let messageBody = createMessageTextBody(name, phone,checkbox, comment, stlFileData)

    let mail = {
        from: email,
        to: '3dfarmspb@gmail.com',
        subject: subject,
        text: messageBody
    };


    console.log(file, "mail file")
    if (file) {
        mail["attachment"] = path.join(__dirname, "..", "./uploads/", file.originalname)
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