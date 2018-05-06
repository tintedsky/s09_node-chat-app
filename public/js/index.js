var socket = io();

socket.on('connect', function () {
  console.log('Connected to server.');

  socket.emit('createEmail', {
    to: 'jean@example.com',
    text: 'Hey. This is Hong.'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server.');
});

socket.on('newEmail', function (email){
  console.log('New email', email);
});
