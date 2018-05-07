var socket = io();

socket.on('connect', function () {
  console.log('Connected to server.');
});

socket.on('disconnect', function () {
  console.log('disconnected from server.');
});

socket.on('newMessage', function (msg){
  console.log('NewMessage', msg); //name of the event.
});
