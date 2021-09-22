const path = require('path');
const fs = require('fs');
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sendMail = require("./mail");
const priceCalculation = require("./price-calculation");


const PORT = process.env.PORT || 3100;
const app = express();

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.dirname("") + '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file["originalname"])
  }
})


const upload = multer({ storage: storage});


app.post("/form", upload.any(), async (req, res) => {
  try {
    const subject = "Запрос "
    const name = req.body.name || "аноним";
    const email = req.body.email;
    const phone = req.body.phone;
    const comment = req.body.comment || "без комментариев";
    const checkbox = req.body.checkbox;
    const files = req.files;

    if (req.body.email && req.body.phone) {
        sendMail(name, email, subject, phone, checkbox,files, comment)
    } else {
      res.status(400).send({
        status: false,
        data: "Что то пошло не так. Данные не отправлены. Мы будем благодарны, если вы позвоните и сообщите об ошибке :(",
      });
    }
  } catch (err) {
      console.log(err)
    res.status(500).send(err);
  }
});




app.post("/calculator", upload.any(), async (req, res) => {
  const files = req.files;

  files.forEach(function(file) {
    priceCalculation(file)
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});