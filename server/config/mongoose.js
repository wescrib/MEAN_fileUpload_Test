var mongoose = require("mongoose");
var fs = require("fs");

mongoose.connect("mongodb://localhost/file_upload");
mongoose.Proise = global.Promise;

let models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach((file) => {
    if(file.includes(".js")){
        console.log("lLoading " + file +"...");
        require(models_path + "/" + file);
    }
})