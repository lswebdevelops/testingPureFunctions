const chunkArray = require('./chunk');


test('ChunkArray function exists', ()=>{
    expect(chunkArray).toBeDefined();
});

test('chunk an array of 10 values with length of 3',()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    let len = 3;
    const chunkedArr = chunkArray(numbers, len);
    expect(chunkedArr).toEqual([[1,2,3],[4,5,6], [7,8,9],[10]]);
    
});

test('chunk an array of 10 values with length of 2',()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    
    len = 2;
    const chunkedArr = chunkArray(numbers, len);
    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6], [7,8],[9, 10]]);


});