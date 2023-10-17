const express = require("express");
const zooRouter = require("./routes/zoo.routes");

const app = express();

app.use(express.static("public"));
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