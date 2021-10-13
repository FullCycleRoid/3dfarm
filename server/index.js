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
    let name = req.body.name || "аноним",
        comment = req.body.comment || "без комментариев",
        stlFileData = null,
        file = Array.from(req.files)[0]

    sendMail(name, req.body.email, req.body.phone, req.body.isCallbackCheckbox, file, comment, stlFileData)

  } catch (err) {
    console.log(err)
    res.send(err);
  }
});

app.post("/calculator-form", upload.any(), async (req, res) => {

  try {
    let name = "аноним",
        comment = "comment",
        stlFileData = req.body.stlFileData,
        file = Array.from(req.files)[0]


    console.log(req.body, "req body email")
    sendMail(name, req.body.email, req.body.phone, req.body.isCallbackCheckbox, file, comment, stlFileData)

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
  const file = Array.from(req.files)[0];

  if (extValidator(file.filename)) {
    let stlFilePriceData = stlHandler(file)
    res.status(200).send(stlFilePriceData)
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