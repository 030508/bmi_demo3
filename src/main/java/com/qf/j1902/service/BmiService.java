package com.qf.j1902.service;

import com.qf.j1902.bean.BmiBean;

import java.util.List;

public interface BmiService {
//    查询所有数据
  public   List<BmiBean> list();
  //根据int删除数据
  public  boolean delBmi(int id);
  //查询id最大值
  public  int maxId();
  //最大id对应的行
  public BmiBean  bmiBean(String data);
  //添加一行
  public boolean addBmi(BmiBean bmiBean);
}
