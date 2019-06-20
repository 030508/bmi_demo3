var delid;
function bmi_delete(bmiid) {
    alert(bmiid);
     delid = bmiid;
    var  url = "http://localhost:8080/bmidelete?id="+bmiid;
    myAjax("get",url,true,null,myScuccse2,myError);

}
function myScuccse2(msg) {
    if (msg=1) {
alert("删除成功");
var  tb = document.getElementById("table_history");
var tabid= document.getElementById(delid);
alert(delid)
tb.removeChild(tabid);
}
}
function myError(){
    alert("删除失败");
}