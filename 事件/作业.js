/*
一、DOM0 事件和DOM2级在事件监听使用方式上有什么区别？
0级DOM
分为2个：一是在标签内写onclick事件

　　　　 二是在JS写onlicke=function（）{}函数
1）

<input id="myButton" type="button" value="Press Me" onclick="alert('thanks');" >
2)

document.getElementById("myButton").onclick = function () {
    alert('thanks');
}
2级DOM
只有一个：监听方法，有两个方法用来添加和移除事件处理程序：addEventListener()和removeEventListener()。

它们都有三个参数：第一个参数是事件名（如click）；

　　　　　　　　　第二个参数是事件处理程序函数；

　　　　　　　　 第三个参数如果是true则表示在捕获阶段调用，为false表示在冒泡阶段调用。
- addEventListener():可以为元素添加多个事件处理程序，触发时会按照添加顺序依次调用。
- removeEventListener():不能移除匿名添加的函数。

document.getElementById("myTest").attachEvent("onclick", function(){alert(1)});
//等价于
document.getElementById("myTest").addEventListener("click", function(){alert(1)}, false);


二、attachEvent与addEventListener的区别？
1.参数个数不相同，这个最直观，addEventListener有三个参数，attachEvent只有两个，attachEvent添加的事件处理程序只能发生在冒泡阶段，addEventListener第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）

2.第一个参数意义不同，addEventListener第一个参数是事件类型（比如click，load），而attachEvent第一个参数指明的是事件处理函数名称（onclick，onload）

3.事件处理程序的作用域不相同，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window，所以刚才例子才会返回undefined，而不是元素id

4.为一个事件添加多个事件处理程序时，执行顺序不同，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器



三、解释IE事件冒泡和DOM2事件传播机制？
IE事件冒泡：事件是从开始由最具体的接收，然后逐级向上层节点传播
DOM2事件传播：事件是从顶层节点一级级的往下传播，到达目标节点，这一阶段叫事件捕获，然后又从目标节点逐级向上层节点传播，这一阶段是事件冒泡



四、如何阻止事件冒泡？ 如何阻止默认事件？
兼容DOM的浏览器会将一个event对象传入事件处理程序中，
这个event对象包含一个stopPropagation()方法，
可以组织事件的进一步捕获或冒泡（取决于添加时的参数）。
并且包含一个preventDefault()方法，可以取消事件的默认行为。

对于IE来说，它的event对象具有cancelBubble属性，默认值为false，
设置为true用来取消事件冒泡； 还有returnValue，默认值为true，
设置为false用来取消事件的默认行为。
*/
//阻止事件冒泡
function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBUbble = true;
    }
}
//阻止默认事件
function preventDefault() {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}


//五、有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容

<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
    <li>前端6班</li>
</ul>
    <script>
        var ct = document.querySelectorAll('.ct li')
    for(var i = 0; i < ct.length; i++) {
            ct[i].addEventListener('click', function (e) {
                console.log(e.target.innerText)
            })
        }
    </script>



    //六、补全代码，要求：

    //当点击按钮开头添加时在<li>这里是</li>元素前添加一个新元素，内容为用户输入的非空字符串；
    //当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
    //当点击每一个元素li时控制台展示该元素的文本内容。

    <ul class="ct">
        <li>这里是</li>
        <li>饥人谷</li>
        <li>任务班</li>
    </ul>
    <input class="ipt-add-content" placeholder="添加内容" />
    <button id="btn-add-start">开头添加</button>
    <button id="btn-add-end">结尾添加</button>
    <script>
        var ct = document.querySelector('.ct')
        var ipt = document.querySelector('.ipt-add-content')
        var addStartBtn = document.querySelector('#btn-add-start')
        var addEndBtn = document.querySelector('#btn-add-end')

        ct.addEventListener('click',function(e){
            if(e.target.tagName.toLowerCase() === 'li'){
            console.log(e.target.innerText)
        }
        })

        addStartBtn.addEventListener('click',function(){
            if(ipt.value ==='')return;
            var newLi = document.createElement('li')
            newLi.innerText = ipt.value
            ct.insertBefore(newLi,ct.firstChild)
        })

        addEndBtn.addEventListener('click',function(){
            if(ipt.value ==='')return;
            var newLi = document.createElement('li')
            newLi.innerText = ipt.value
            ct.appendChild(newLi)
        })
    </script>



    //七、补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前
    //li元素的data-img对应的图片。

    <ul class="ct">
        <li data-img="1.png">鼠标放置查看图片1</li>
        <li data-img="2.png">鼠标放置查看图片2</li>
        <li data-img="3.png">鼠标放置查看图片3</li>
    </ul>
    <div class="img-preview"></div>
    <script>
//方法1
    var ct = document.querySelector('.ct')
    var preview = document.querySelector('.img-preview')

    ct.addEventListener('mouseover',function(e){
        var dataImg = e.target.getAttribute('data-img')
        if(e.target.tagName.toLowerCase() === 'li'){
            preview.innerHTML = '<img src="' + dataImg + '">'
        }
        return preview.innerHTML
    })

//方法二
    var ct = document.querySelector('.ct'),
    childs = ct.querySelectorAll('li'),
    preview = document.querySelector('.img-preview');

    for(var i=0; i<childs.length; i++){
    childs[i].addEventListener('mouseenter', function () {
        var dataImg = this.getAttribute('data-img');
        preview.innerHTML = '<img src="' + dataImg + '">'
        });
     }
</script>