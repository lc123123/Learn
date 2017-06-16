var x = 10
bar() 
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo()
}

/*globalContext = {
  AO: {
    x: 10
    foo: function
    bar: function
  },
  scope: null
}

//声明 foo 时得到了： foo.[[scope]] = globalContext.AO
//声明 bar 时得到了： bar.[[scope]] = globalContext.AO

barContext = {
  AO{x: 30
  },
  scope: bar.[[scope]] //globalContext.AO
}

fooContext = {
  AO {},
  scope: foo.[[scope]] //globaContext.AO
}
所以最后输出 10.