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
// checking if it is a falsy/ truthy values
test('Should be falsy', () =>{
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(false)).toBeFalsy();
    expect(functions.checkValue(true)).toBeTruthy(); 
      
})

// to create a user (toEqual because is an array or object)
test('User should be Brad Traversy object',()=>{
    expect(functions.createUser()).toEqual({
        firstName: "Brad", 
        lastName: "Traversy"
    })
})


// less than and greater than 

test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect (load1 + load2).toBeLessThan(1600)
    expect(load1 + load2).toBeLessThanOrEqual(1600)
    expect(load1 + load2).toBeGreaterThanOrEqual(1500)

})

// regex

test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/);
    expect('tIam').toMatch(/I/);

})
//arrays


