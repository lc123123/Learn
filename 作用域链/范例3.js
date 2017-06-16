var a = 1;

function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn3()
  fn2()
  console.log(a)
  
  function fn2(){
    console.log(a)
    a = 20
  }
}

function fn3(){
  console.log(a)
  a = 200
}

fn()
console.log(a)

/*
globalContext = {
    AO {
        a: 200
        fn: function
        fn3: function
    },
}

fn.[[scope]] = globalContext.AO
fn3.[[scope]] = globalContext.AO

fnContext = {
    AO {
        a: 20
        fn2: function
    },
    Scope: globalContext.AO
}

fn2.[[scope]] = fnContext.AO

fn3Context = {
    AO {},
    Scope: globalContext.AO
}

fn2Context = {
    AO {},
    Scope: fnContext.AO
}
*/

//输出 undefined 5 1 6 20 200