const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static('../'));
server.listen(3000, function() {
    console.log('Server escuchando en puerto', 3000);
});

//Serial Communication
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

const port = new Serialport("COM5", {
    baudRate: 9600,
});

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('open', function() {
    console.log('Connection is opened');
})

parser.on('data', function(data) {
    console.log(data);
    io.emit('temp', data);



});

port.on('error', function(err) {
    console.log(err);
})

app.get('/myform', function(req, res) {
    let myText = req.query.mytext;
    //res.send(`Your text ${myText}`);
    //console.log(myText);
    port.write(myText);
    res.setHeader("Location", "http://localhost:3000/NodeJSArduino/");
    io.emit("temp", "Registro");
})