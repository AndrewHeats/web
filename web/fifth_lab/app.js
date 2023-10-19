const express = require("express");
const zooRouter = require("./routes/zoo.routes");
const cors = require('cors');
const app = express();



  
app.use(express.static("public"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: 'POST,PUT,GET,OPTIONS',  // Allow the specified methods
  allowedHeaders: ['Content-Type']  // Add any other required headers here
}));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(express.json());
app.use("/api", zooRouter);
app.get("", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.listen(5500, ()=>{
    console.log("http://127.0.0.1:5500");
});