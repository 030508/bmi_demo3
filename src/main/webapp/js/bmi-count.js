function  Cal() {
    alert("cal")
    var  h = document.getElementById("height").value;  //获取input中的身高值
    var w = document.getElementById("weight").value; //获取input中的体重值
    var  genters = document.getElementsByName("sex"); //获取性别序列
    var genter;
    for (var i=0;i<genters.length;i++) if (genters[i].checked) {//遍历序列    // 判断选中的值
        genter = genters[i].id;   //获取对应选中的sex的id值
    }
    var idea_w = (h-80)*0.7; //计算理想体重
    h=h/100; //身高换算（厘米 换算成米）
    var bmi = w/(h*h); //计算bmi  得到浮点型 bmi
    bmi = Math.round(bmi*100)/100 //先bmi转换成整型 在除100 获取保留两位小数
    var   bmi_result_photo = document.getElementById("bmi_result_photo"); //获取照片img id值
    var  bmi_result_value = document.getElementById("bmi_result_value"); //获取bmi值所在范围
    var bmi_result_idealweight = document.getElementById("bmi_result_idealweight"); //理想体重的值
    idea_w = Math.round(idea_w*100)/100;
    bmi_result_idealweight.innerText = idea_w;  //给理想体重赋值
    if (genter=="female") {
        if (bmi<20.5){
            bmi_result_photo.src = "img/3_01_01.jpg";
            bmi_result_value.innerText = bmi+"偏瘦";
            bmi_result_value.style.background="rgb( 135, 206, 250)";
            bmi_result_idealweight.style.background="rgb( 135, 206, 250)";
        }else if (bmi>=20.5 && bmi < 27){
            bmi_result_photo.src = "img/3_01_02.jpg";
            bmi_result_value.innerText = bmi+"正常";
            bmi_result_value.style.background="rgb(180, 238, 180)";
            bmi_result_idealweight.style.background="rgb(180, 238, 180)";
        }else if (bmi>=27 && bmi < 32){
            bmi_result_photo.src = "img/3_01_03.jpg";
            bmi_result_value.innerText = bmi+"过重";
            bmi_result_value.style.background="gold";
            bmi_result_idealweight.style.background="gold";
        }else if (bmi >= 32){
            bmi_result_photo.src = "img/3_01_04.jpg";
            bmi_result_value.innerText = bmi+"肥胖";
            bmi_result_value.style.background="rgb(238, 99, 99)";
            bmi_result_idealweight.style.background="rgb(238, 99, 99)";
        }
    }else {
        if (bmi<18.5) {
            bmi_result_photo.src ="img/3_01.jpg";
            bmi_result_value.innerText = bmi+"偏瘦";
            bmi_result_value.style.background="rgb( 135, 206, 250)";
            bmi_result_idealweight.style.background="rgb( 135, 206, 250)";

        }else if (bmi>=18.5 && bmi < 25 ){
            bmi_result_photo.src ="img/3_02.jpg";
            bmi_result_value.innerText = bmi+"正常";
            bmi_result_value.style.background="rgb(180, 238, 180)";
            bmi_result_idealweight.style.background="rgb(180, 238, 180)";
        }else if (bmi>=25 && bmi < 30){
            bmi_result_photo.src ="img/3_03.jpg";
            bmi_result_value.innerText = bmi+"过重";
            bmi_result_value.style.background="gold";
            bmi_result_idealweight.style.background="gold";
        }else if (bmi>=30  ){
            bmi_result_photo.src ="img/3_04.jpg";
            bmi_result_value.innerText = bmi+"肥胖";
            bmi_result_value.style.background="rgb(238, 99, 99)";
            bmi_result_idealweight.style.background="rgb(238, 99, 99)";
        }
    }
    var d = new Date();
    var sign = d.getTime();
    var mydate = d.getFullYear()+"-" +(d.getMonth()+1);
    alert(mydate);
    var url =  "http://localhost:8080/bmiadd?height="+h+"&weight="+w+"&sign="+sign+"&date="+mydate+"&bmi="+bmi;
    myAjax("get",url,true,null,myScuccse3,myError);
}
function  myScuccse3(msg) {
    alert(msg);
    var  dates =JSON.parse(msg);
    var tb = document.getElementById("table_history");  //获取表单id
        var tr = document.createElement("tr"); //创建行
        tr.id = dates.id;  //设置行id选择器等于数据库id值
        tr.className = "table_history_rsult"; //设置行class选择器
        tr.innerHTML = "<td>" + dates.id + "</td>" +
            "<td>" + dates.date + "</td>" +
            "<td>" + dates.height + "</td>" +
            "<td>" + dates.weight + "</td>" +
            "<td>" + dates.bmi + "</td>" +
            '<td><input type="submit" value="删除" class="submit"  onclick="bmi_delete(' + dates.id + ')"/></td>';
        alert("添加完成---------");
        tb.appendChild(tr);

}