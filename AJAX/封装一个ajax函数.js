//封装一个 ajax 函数，能通过如下方式调用。后端在本地使用server-mock来 mock 数据
function ajax(opts) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status == 200 || xhr.status === 304) {
                var json = JSON.parse(xhr.responseText);
                opts.success(json);
            } else {
                opts.error()
            }
        }
    };
    var query = ''
    for (key in opts.data) {
        query += key + opts.data[key] + '&'
    }
    query = query.substr(0, query.length - 1)

    if (opts.type.toLowerCase() === 'post') {
        xhr.open(opts.type, opts.url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(query);
    }
    if (opts.type.toLowerCase() === 'get') {
        xhr.open(opts.type, opts.url + '?' + query, true)
        xhr.send();
    }
}


document.querySelector('#btn').addEventListener('click', function () {
    ajax({
        url: '/login',   //接口地址
        type: 'get',               // 类型， post 或者 get,
        data: {
            username: 'xiaoming',
            password: 'abcd1234'
        },
        success: function (ret) {
            console.log(ret);       // {status: 0}
        },
        error: function () {
            console.log('出错了')
        }
    })
});




//可配置方法
function ajax(opts) {
    opts.success = opts.success || function () { };
    opts.error = opts.error || function () { };
    opts.dataType = opts.dataType || 'json';
    opts.data = opts.data || {};
    var dataStr = '';
    for (var key in opts.data) {
        dataStr += key + opts.data[key] + '&'
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status == 200 || xhr.status === 304) {
                if (opts.datatype === 'text') {
                    opts.success(xhr.responseText)
                }
                if (opts.dataType === 'json') {
                    var json = JSON.parse(xhr.responseText);
                    opts.success(json);
                }
            } else {
                opts.error()
            }
        }
    };

    dataStr = dataStr.substr(0, dataStr.length - 1)

    if (opts.type.toLowerCase() === 'post') {
        xhr.open(opts.type, opts.url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        xhr.send(dataStr);
    }
    if (opts.type.toLowerCase() === 'get') {
        xhr.open(opts.type, opts.url + '?' + dataStr, true)
        xhr.send();
    }
}


ajax({
    url: '/postArticle',
    type: 'post',
    dataType: 'text',
    data: {
        article: article
    },
    success: function () {
        $('#container').innerText = xhr.reponseText;
    },
    error: function () {
        console.log('error')
    }
})