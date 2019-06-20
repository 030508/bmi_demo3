window.onload=function () {
    alert("欢迎BMI");
    //使用ajax发送查询请求
    //1.创建XMLHttpRequest对象
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHttpRequest");
    }
//    2.设置回调函数
    xhr.onreadystatechange = huidiao;
//    3.设置地址参数
    var url = "http://localhost:8080/bmiquery";
    xhr.open("get",url,true);
//    4.发送请求
    xhr.send(null);
//    5.在回调函数中使用dom模块更新局部页面
    function huidiao() {
        if (xhr.readyState ==4 && xhr.status == 200){ //判断发送成功和网络状态
            /*alert(xhr.responseText);*/
            var tb = document.getElementById("table_history");  //获取表单id
            var dates = JSON.parse(xhr.responseText);  //json解析回调函数返回的json
            for (var i=0;i<dates.length;i++){
                var  tr = document.createElement("tr"); //创建行
                tr.id=dates[i].id;  //设置行id选择器等于数据库id值
                tr.className="table_history_rsult"; //设置行class选择器
                tr.innerHTML="<td>"+dates[i].id+"</td>"+
                    "<td>"+dates[i].date+"</td>"+
                    "<td>"+dates[i].height+"</td>"+
                    "<td>"+dates[i].weight+"</td>"+
                    "<td>"+dates[i].bmi+"</td>"+
                    '<td><input type="submit" value="删除" class="submit"  onclick="bmi_delete('+dates[i].id+')"/></td>';

                tb.appendChild(tr);
            }
            }
        }

}
