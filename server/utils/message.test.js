var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate gnerate correct message object', () => {
    var from = 'Admin';
    var text = 'Test Generation';
    var message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', ()=> {
  it('should generate a correct location object', () => {
    var from = 'Deb';
    var lat = 1;
    var lng = 2;
    var url = 'https://www.google.com/maps?q=1,2';
    var message = generateLocationMessage(from, lat, lng);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
