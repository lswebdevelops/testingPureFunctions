const {sum, multiply, divide}  = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 1 * 2 to equal 3', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test('divide 1 / 2 to equal 0.5', () =>{
//    expect(divide(1, 2)).toBeCloseTo(0.5);
// or 
    expect(divide(1, 2)).toEqual(0.6);

  })