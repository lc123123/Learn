var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTpl(data) {
    //todo...
};
var result = getTplStr(prod);  //result为下面的字符串


<dl class="product">
    <dt>女装</dt>
    <dd>短款</dd>
    <dd>冬季</dd>
    <dd>春装</dd>
</dl>


var prod = {
    name: '女装',
    styles: ['短款', '冬季', '春装']
};
function getTplStr(data) {
    var arr = []
    arr.push('<dl class="product">')
    arr.push('    <dt>' + data.name + '</dt>    ')
    for (var i = 0; i < data.styles.length; i++) {
        arr.push('<dd>' + data.styles[i] + '</dd>    ')
    }
    arr.push('</dl>');
    return arr.join('');
};
var result = getTplStr(prod);