let path = require('path'),
      fs = require('fs'),
      express = require("express"),
      cors = require("cors"),
      multer = require("multer"),
      sendMail = require("./mail"),
      stlHandler = require("./calculator"),
      axios = require('axios'),
      config = require("./config")



const PORT = process.env.PORT || 3100,
      app = express();

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


app.post("/contact-form", upload.any(), async (req, res) => {
  try {
    let subject = "Запрос ",
        name = req.body.name || "аноним",
        email = req.body.email,
        phone = req.body.phone,
        comment = req.body.comment || "без комментариев",
        checkbox = req.body.checkbox,
        files = req.files


    sendMail(name, email, subject, phone, checkbox, req.files, comment)

  } catch (err) {
    console.log(err)
    res.send(err);
  }
});

app.post("/calculator-form", upload.any(), async (req, res) => {

  try {
    let subject = "Запрос из калькулятора",
        email = req.body.email,
        name = "аноним",
        comment = "comment",
        phone = req.body.phone,
        stlFilePriceData = req.body.stlFilePriceData,
        files = req.files,
        checkbox = "";
    console.log(fileCalculationData, "object")
    sendMail(name, email, subject, phone, checkbox, files, comment, stlFilePriceData)

  } catch (err) {
    console.log(err)
    res.send(err);
  }
});

function extValidator(filename) {
  const ext = filename.split(".").pop()
  if (ext === "stl") return true
  return false
}

app.post("/calculator", upload.any(), async (req, res) => {
  const file = req.files[0];
  console.log(file)
  if (extValidator(file.filename)) {
    let printedFileData = stlHandler(file)
    res.status(200).send(printedFileData)
  } else {
    res.status(500).send("неверное расширение файла. Пожалуйста загрузите файл в формате STL")
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});