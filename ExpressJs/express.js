// const express = require('express')
// const app = express();
// app.get('/', function (req, res) {

//    res.send("i am going to leran back-end in one weak");
// });
// app.listen(8888);

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("hlw iam here to disturb you");
    next();
});
app.get('/', (req, res) => {
    res.send("  khan this is home page ");
});
app.get('/about', (req, res) => {
    res.send(" <h1>this is about page</h1>");

});
app.listen(8888, () => {
    console.log("serveer is on  : 8888");
});