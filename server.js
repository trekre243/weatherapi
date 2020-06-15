const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname + '/public/dist/public'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public"));
})

app.listen(8000, () => console.log('Server started on port 8000'));