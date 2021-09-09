const path = require('path');
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const sendMail = require("./mail");
const fs = require("fs");

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


const directory = path.dirname("");
const parent = path.resolve(directory, '..');
const uploaddir = parent + (path.sep) + '3dfarm' + (path.sep) + 'uploads';
// console.log(directory, "directory",
//             parent, "parent",
//             uploaddir, "upload dir")

app.post("/form", upload.single("fileUpload"), async (req, res) => {
  try {

    const subject = "Запрос "
    const name = req.body.name || "аноним";
    const email = req.body.email;
    const phone = req.body.phone;
    const comment = req.body.comment || "без комментариев";
    const checkbox = req.body.checkbox;
    const file = req.file || "нет файла";

    if (req.body.email && req.body.phone) {
        sendMail(name, email, subject, phone, checkbox,file, comment)
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});