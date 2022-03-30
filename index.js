const path = require('path');
const express = require('express');
const http = require('http');
const SocketIo = require('socket.io');
var Delimiter = require('@serialport/parser-delimiter');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

var port = process.env.PORT || 3000;

// routes
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/sensor/:id', (req, res) => {

    const articleId = req.params.id;
    // console.log(articleId);
    io.emit('arduino:data', {
        value: articleId
    });
    res.send('holaa');

});




server.listen(port, () => {
    console.log('Server on port' + port);
});