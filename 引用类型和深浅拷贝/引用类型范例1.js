
var a = 1
var b = 2
var c = { name: '饥人谷', age: 2 }
var d = [a, b, c]

var aa = a
var bb = b
var cc = c
var dd = d

a = 11
b = 22
c.name = 'hello'
d[2]['age'] = 3

console.log(aa) 
console.log(bb) 
console.log(cc)
console.log(dd)

/*
var a = 1, var b = 2, var c = { name: '饥人谷', age: 2 }, var d = [a, b, c]

a--11--      b--22--      c--0x033--     d--0x044--

c--0x033-- === { name: 'hello', age: 3 }  
d--0x044-- === [a, b, c] === [1, 2, {name: 'hello', age: 3}]

var aa = a, var bb = b, var cc = c, var dd = d

aa--1--     bb--2--    cc--0x033--   dd--0x044--

a = 11, b = 22, c.name = 'hello', d[2]['age'] = 3

输出 aa = 1, bb = 2, {name: 'hello', age:3 } ,[1, 2 , {name: 'hello',age: 3}]

*/