function myAjax(method,url,sync,data,myScuccse,myError) {
    //传入打开方式，地址，是否异步，数据（null），正常时（方法），错误时（方法）
    var xhr ;
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHttpRequest");
    }
    //设置回调函数
    xhr.onreadystatechange=function () {
        if (xhr.readyState == 4 && xhr.status ==200){
            myScuccse(xhr.responseText);
        }
    }
    xhr.open(method,url,sync);
    xhr.send(null);
}