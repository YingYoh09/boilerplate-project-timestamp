var express = require('express');
var app = express();





app.get('/api/',function(req,res){
    let date = new Date();
    res.json({"unix":date.getTime(), "utc":date.toUTCString()});
});


app.get('/api/:time',function(req,res){
    let timeString = req.params.time;
    let date = "Invalid";
    if (!isNaN(timeString)){
        date = new Date(parseInt(timeString));
    } else{
        date = new Date(timeString);
    }
    if (date == "Invalid" || isNaN(date.getTime())){
        res.json({error: "Invalid Date"});
    } else{
        res.json({"unix":date.getTime(), "utc":date.toUTCString()});
    }
});






















 module.exports = app