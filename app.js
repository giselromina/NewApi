var express = require('express');

var app = express();


var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Wellcome to my Api!!');
});

app.listen(port, () => {
    console.log('server listening on port: ' + port);
});