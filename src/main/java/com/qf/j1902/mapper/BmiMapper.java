package com.qf.j1902.mapper;

import com.qf.j1902.bean.BmiBean;

import java.util.List;

public interface BmiMapper {
    List<BmiBean> list();

    boolean delBmi(int id);

    int maxId();

    BmiBean bmiBean( String data);

    boolean addBmi(BmiBean bmiBean);
}
