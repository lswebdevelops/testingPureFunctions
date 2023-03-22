// Jest Crash Course - Unit Testing in JavaScript - Traversy Media

const functions = require('./functions');


test('Adds 2 + 2  to equal 4', () =>{
    expect(functions.add(2,2)).toBe(4);
    
})

test('Adds 2 + 2  to equal 4', () =>{
    expect(functions.add(2,2)).not.toBe(45);
    
})

test('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
    
})
// checking if it is a falsy value
test('Should be falsy', () =>{
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
    expect(functions.checkValue(true)).toBeTruthy(); 
      
})

