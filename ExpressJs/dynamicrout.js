const express = require('express');

const app = express();
//rout parameter me :usernaem lga ke kisi ka nam acces kr skte hy 

app.get('/', (req, res) => {
    res.send("my name is shoib khan");
})
app.get("/profile/:username", (req, res) => {

    //accessing the user naem for all...
    res.send(`Hello my name is : ${req.params.username}`);
})
app.listen(8080), () => {
    console.log('port is lisnong ');
} 