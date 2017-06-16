// 写一个函数trim(str)，去除字符串两边的空白字符
function trim(str) {
    var newStr = str.replace(/^\s*|\s*$/g, '')
    return newStr
}
var a = '   jdasidjo daskl ndlas  '
console.log(trim(a))


//写一个函数isEmail(str)，判断用户输入的是不是邮箱
function isEmail(str) {
    reg = /^[a-z0-9A-Z_-]+@[a-z0-9A-Z_-]+(\.[a-z0-9A-Z_-]+)+$/
    return reg.test(str)
}
console.log(isEmail('a'))//false
console.log(isEmail('123@qq.com'))//true
console.log(isEmail('zzzzzzzdadasdqweqwedq@163.com'))//true
console.log(isEmail('w-eqwdasd@qq.com'))


//写一个函数isPhoneNum(str)，判断用户输入的是不是手机号
function isPhoneNum(str) {
    reg = /^1[3|5|7|8]\d{9}$/g
    return reg.test(str)
}
console.log(isPhoneNum('110'))//false
console.log(isPhoneNum('13893000000'))//true
console.log(isPhoneNum('1881333900'))//false
console.log(isPhoneNum('12345678901'))//false
console.log(isPhoneNum('17045678901'))//true


/*写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名
（长度6-20个字符，只能包括字母、数字、下划线）*/
function isValidUsername(str) {
    reg = /^[a-zA-Z0-9_]{6,20}$/
    return reg.test(str)
}
console.log(isValidUsername('111111!'))//false
console.log(isValidUsername('zxw1111_'))//true
console.log(isValidUsername('zxw_2131242153243241'))//true
console.log(isValidUsername('zxw$$aweeqweqw'))//false
console.log(isValidUsername('zxczxwZZX'))//true


/*写一个函数isValidPassword(str), 判断用户输入的是不是合法密码
（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）*/
function isValidPassword(str) {
    if (str.length < 6 || str.length > 20 || /\W/.test(str)) {
        return false
    }
    var cond = 0
    if (/[a-z]/.test(str)) cond++
    if (/[A-Z]/.test(str)) cond++
    if (/[0-9]/.test(str)) cond++
    if (/[_]/.test(str)) cond++
    if (cond >= 2) {
        return true
    } else {
        return false
    }
}
console.log(isValidPassword('zxw1992513'))
console.log(isValidPassword('_zxw1992513'))
console.log(isValidPassword('zxwasdasda'))
console.log(isValidPassword('zxw199_2513'))


//写一个正则表达式，得到如下字符串里所有的颜色
var re = /^\#[0-9A-Fa-f]{6}/g
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee "
console.log( subj.match(re) )  // ['#121212', '#AA00ef']



//下面代码输出什么? 为什么? 改写代码，让其输出[""hunger"", ""world""].
var str = 'hello  "hunger" , hello "world"';
var pat =  /".*"/g;
str.match(pat);
//输出 "hunger" , hello "world"
/*因为 . 代表除换行符和回车符之外的任意字符
       * 代表出现零次或多次
       g 表示是全文搜索，意思只要符合规则的都能匹配*/
    
//改写
var str = 'hello  "hunger" , hello "world"';
var pat =  /"\w*"/g;
str.match(pat);