1.
function deepCopyFn(obj) {
  var newObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "string" || typeof obj[key] === "number" ||
        typeof obj[key] === "boolean" || typeof obj[key] === undefined || typeof obj[key] === null) {
        newObj[key] = obj[key];
      } else {
        newObj[key] = deepCopyFn(obj[key]);
      }
    }
  }
  return newObj;
}

//通过递归的方式取到所有基本类型的值和所有引用类型中每一个基本类型的值，
//再逐一赋值给一个新的空对象，实现深拷贝  


2.
function deepCopyFn2(obj) {
  var newObj = {};
  var objString = JSON.stringify(obj);
  var newObj = JSON.parse(objString);
  return newObj;
}
//把对象的所有值转为字符串，
//再把字符串转为对象赋值给一个新的空对象，实现深拷贝
//缺点：用JSON.stringify方法来在将对象转字符串时会省略值为undefined的键
