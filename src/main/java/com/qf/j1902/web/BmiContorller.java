package com.qf.j1902.web;

import com.qf.j1902.bean.BmiBean;
import com.qf.j1902.service.BmiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class BmiContorller {
    @Autowired
    private BmiService bmiService;

    @RequestMapping("/")
    public String idex(){
        return "index";
    }
    @RequestMapping(value = "bmiquery" , method = RequestMethod.GET)
    @ResponseBody
    public List<BmiBean>  bmiBeanList(){
        List<BmiBean> bmiBeanList = bmiService.list();
        return bmiBeanList;
    }
    @RequestMapping(value = "bmidelete" , method = RequestMethod.GET)
    @ResponseBody
    public int  bmidelete(int id){

        boolean b = bmiService.delBmi(id);
        if (b){
            return 1;
        }
        return -1;
    }
    @RequestMapping(value = "bmiadd" , method = RequestMethod.GET)
    @ResponseBody
    public BmiBean  bmiadd(BmiBean bmiBean){
        System.out.println(bmiBean);
        boolean b = bmiService.addBmi(bmiBean);
            return bmiBean;
    }
}
