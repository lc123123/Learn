var a = 1
var c = { name: 'jirengu', age: 2 }

function f1(n){
  ++n
}
function f2(obj){
  ++obj.age
}

f1(a) 
f2(c) 
f1(c.age) 
console.log(a) 
console.log(c)

/*
var a = 1, var c = { name: 'jirengu', age: 2}

  a--1--      c--0x055--

  c--0x055-- === { name: 'jirengu', age: 3}

  f1(a)的时候,可以这样理解
  function f1(n){
    var n = a
    ++n
  }
  n--4--
a是基本类型，不会变动，a还是1

f2(c)的时候，可以这样理解
function f2(obj){
    var obj = c === --0x055--
    ++obj.age
}

f1(c.age)的时候，可以这样理解
function f1(n){
    var n = 3
    ++n
}

所以最后，输出  1  {name: 'jirengu', age: 3}
*/