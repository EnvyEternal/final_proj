function sum(a,b){
    return a+b
}

test('Test',()=>{
    const result = sum(2,2)
    expect(result).toBe(4)
})