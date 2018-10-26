const app = require('./app.js');
const math = require('./math.js');

// METHOD 1: jest.fn to mock a function
// math.add = jest.fn();
// math.subtract = jest.fn();

// describe('Method 1: jest.fn', () => {
//   it('calls math.add', () => {
//     app.doAdd(1, 2);
//     expect(math.add).toHaveBeenCalled();
//     expect(math.add).toHaveBeenCalledTimes(1);
//     expect(math.add).toHaveBeenCalledWith(1, 2);
//   })
//   it('calls math.subtract', () => {
//     app.doSubtract(3, 1);
//     expect(math.subtract).toHaveBeenCalled();
//     expect(math.subtract).toHaveBeenCalledTimes(1);
//     expect(math.subtract).toHaveBeenCalledWith(3, 1);
//   })
// })

// METHOD 2: jest.mock to mock a module
jest.mock('./math.js');

describe('Method 2: jest.mock', () => {
  it('calls math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalled();
    expect(math.add).toHaveBeenCalledTimes(1);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  })
  it('calls math.subtract', () => {
    app.doSubtract(3, 1);
    expect(math.subtract).toHaveBeenCalled();
    expect(math.subtract).toHaveBeenCalledTimes(1);
    expect(math.subtract).toHaveBeenCalledWith(3, 1);
  })
})

// METHOD 3: jest.spyOn to spy or mock a function
