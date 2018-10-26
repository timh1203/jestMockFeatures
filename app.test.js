const app = require('./app.js');
const math = require('./math.js');

// METHOD 1: jest.fn to mock a function

// describe('Method 1: jest.fn', () => {
//   math.add = jest.fn();
//   math.subtract = jest.fn();
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
// jest.mock('./math.js');

// describe('Method 2: jest.mock', () => {
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

// METHOD 3: jest.spyOn to spy or mock a function
describe('Method 3: jest.spyOn)', () => {
  const spyOnAdd = jest.spyOn(math, 'add');
  const spyOnSubtract = jest.spyOn(math, 'subtract');
  it('calls math.add', () => {
    expect(app.doAdd(1, 2)).toEqual(3); // calls the original implementation
    expect(spyOnAdd).toHaveBeenCalledWith(1, 2) // and the spy stores the calls to add
  })
  it('calls math.subtract', () => {
    expect(app.doSubtract(1, 3)).toEqual(2); // calls the original implementation
    expect(spyOnSubtract).toHaveBeenCalledWith(1, 3) // and the spy stores the calls to add
  })
})
