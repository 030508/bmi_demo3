package com.qf.j1902.service.impl;

import com.qf.j1902.bean.BmiBean;
import com.qf.j1902.mapper.BmiMapper;
import com.qf.j1902.service.BmiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
@Component
@Service
public class BmiServiceImpl implements BmiService {
   @Autowired
   private BmiMapper bmiMapper;
    //private   BmiDao bmiDao;


   /*public BmiServiceImpl(BmiDao bmiDao) {
        this.bmiDao = bmiDao;
    }*/

    @Override
    public int maxId() {
        return bmiMapper.maxId();
    }

    @Override
    public BmiBean bmiBean(String data) {
        return bmiMapper.bmiBean(data);
    }

    @Override
    public boolean addBmi(BmiBean bmiBean) {
        return bmiMapper.addBmi( bmiBean);
    }

    @Override
    public boolean delBmi(int id) {
        boolean b = bmiMapper.delBmi(id);
        System.out.println(b);
        return b;
    }

    @Override
    public List<BmiBean> list() {
        return bmiMapper.list();
    }
}
