const cors = require("cors");
const path = require('path');
const fileupload = require("express-fileupload");
const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require("express");
const PORT = process.env.PORT || 3100;
const app = express();

const corsOptions ={
   origin:'*',
   credentials:true,
   methods: "GET, POST",
   optionSuccessStatus:200,
}

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.use('/upload', createProxyMiddleware({ target: 'http://localhost:3100', changeOrigin: true }));
app.use(fileupload());
app.use(express.static(path.resolve(__dirname, '../client/build')));




app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.post("/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;
  console.log("file upload try")
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});