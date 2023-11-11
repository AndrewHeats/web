const express = require("express");
const zooRouter = require("./routes/zoo.routes");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});  
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.use("/api", zooRouter);


app.listen(5500, ()=>{
    console.log("http://127.0.0.1:5500");
});