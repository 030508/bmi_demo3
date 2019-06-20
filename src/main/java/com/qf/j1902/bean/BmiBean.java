package com.qf.j1902.bean;

public class BmiBean {
    private  int id; //id
    private String date; //记录日期
    private String height;//身高
    private String weight;//体重
    private String bmi;//bmi参数
    private String sign;//日期时间值
    private String userName;//用户名

    public BmiBean() {
    }

    public BmiBean(String date, String height, String weight, String bmi, String sign, String userName) {
        this.date = date;
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
        this.sign = sign;
        this.userName = userName;
    }

    public BmiBean( String date, String height, String weight, String bmi, String sign) {
        this.date = date;
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
        this.sign = sign;
    }

    public BmiBean(int id, String date, String height, String weight, String bmi, String sign, String userName) {
        this.id = id;
        this.date = date;
        this.height = height;
        this.weight = weight;
        this.bmi = bmi;
        this.sign = sign;
        this.userName = userName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getBmi() {
        return bmi;
    }

    public void setBmi(String bmi) {
        this.bmi = bmi;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        return "BmiBean{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", height='" + height + '\'' +
                ", weight='" + weight + '\'' +
                ", bmi='" + bmi + '\'' +
                ", sign='" + sign + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
}
