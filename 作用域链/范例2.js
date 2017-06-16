var x = 10;
bar() 
function bar(){
  var x = 30;
  function foo(){
    console.log(x) 
  }
  foo();
}

/*
1.
globalContext = {
    AO{
        x: 10
        bar: function
    },
}

bar.[[scope]] = globalContext.AO

2.
barContext = {
    AO{
        x: 30
        foo: function
    },
    Scope: bar.[[scope]] = globalContext.AO
}

foo.[[scope]] = barContext.AO

fooContext = {
    AO{},
    Scope: foo.[[scope]] = barContext.AO
}
*/
// 所以最后输出30