//在发送请求之前设置一个布尔标识符check为true,如果为真，则发送请求，并把check设
//置为false，当在onreadstatechange的函数中如果正常接收数据,则设置check为true.
var check = true;
btn.addEventListener("click",function(){
    if(!check){
      return;
    }
    var xhr=new XMLHttpRequest()
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&(xhr.status==200||xhr.status==304)){
          console.log(xhr.response);
          check = true;
      }   
    }
    xhr.open(method,url,true);
    xhr.send();
    check=false
})