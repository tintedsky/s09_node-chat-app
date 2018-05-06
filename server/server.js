const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath)); /*Config the middleware::*/

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected.');

  socket.emit('newMessage', {
    from: 'abc@gmail.com',
    text: 'newMessage available.',
    createdAt: 123132
  });

  socket.on('createMessage', (message) => {
    message.createdAt=333333;
    console.log('createMessage', message);
  })

  socket.on('disconnect', () => {
    console.log('User was disconnected.');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
