var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('Should reject non-string values', ()=> {
    var res = isRealString(15);
    expect(res).toBe(false);
  });

  it('Should reject strings with only spaces', ()=> {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('Should allow string with non-space characters', ()=> {
    var res = isRealString('Test');
    expect(res).toBe(true);
  });
});
