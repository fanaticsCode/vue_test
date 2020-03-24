import axios from './axios'
import base_url from './base'
import qs from 'qs'


function commonUrl(url, params = {}, method = 'get') {
    if (method.trim() == 'get') {
        return axios.get(`${base_url.rb + url}`, params);
        // return axios.get(`${base_url + url}`, params);
    } else {
        return axios.post(url, params);
    }
}



const ApiList = {
    // getDate:commonUrl('/forward/billDeduct/payment/baseMonopolyLpinfoList?datatype=jsonp',params,'get'),
    getDate(params){
        return commonUrl('/forward/billDeduct/payment/baseMonopolyLpinfoList?datatype=jsonp',params,'get');
    },
}

export default ApiList