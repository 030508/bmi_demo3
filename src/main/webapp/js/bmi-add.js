function addhang(dates) {
    var tb = document.getElementById("table_history");  //获取表单id

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