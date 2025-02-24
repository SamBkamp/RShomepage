const PORT = 3000;
const express = require("express");
const path = require("path");
const router = require("./controllers/router.js");
var favicon = require('serve-favicon');
const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(favicon(path.join(__dirname,'public','media','favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use("/", router);

app.listen(PORT, (err)=>{
    if(err) console.error("uh oh: " + err);
    else console.log("server is running on port " + PORT);
});
