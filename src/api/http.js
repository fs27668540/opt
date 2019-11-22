import axios from 'axios'
import qs from "qs"
  
  
const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间
//axios.defaults.baseURL = 'http://localhost:8080';
  
  
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem('token')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization ='Bearer '+ localStorage.getItem('token');
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});
  
  
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log("response error :"+error);
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log("token 过期");
                    var config = error.config;
                    refresh(config);
                    return;
            }
        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    });
/*
*刷新token
*/
function refresh(config){
    var refreshToken = $cookies.get("refresh_token");
    var grant_type = "refresh_token";
    axios({
        method: 'post',
        url: '/oauth/token',
        data: handleParams({"grant_type":grant_type,"refresh_token":refreshToken}),
        timeout: TIME_OUT_MS,
        headers: {}
    }).then(
        (result) => {
            if(result.data.access_token){   //重新保存token
                $cookies.set("access_token",result.data.access_token);
                $cookies.set("refresh_token",result.data.refresh_token);
                //需要重新执行
                axios(config);
            }else{
  
  
                //this.$events.emit('goto', 'login');
                window.location.reload();
            }
        }
    ).catch((error) => {
        //this.$events.emit('goto','login');
        window.location.reload();
    });
}
/*
* @param response 返回数据列表
*/
function handleResults (response) {
  
  
    var result = {
        success: false,
        message: '',
        status: [],
        errorCode: '',
        data: {}
    }
    if (response.status == '200') {
        result.status = response.status;
        result.data = response.data;
        result.success = true;
    }
    return result
}
  
  
// function handleUrl (url) {
//     //url = BASE_URL + url
//     url =root +url;
// // BASE_URL是接口的ip前缀，比如http:10.100.1.1:8989/
//     return url
// }
  
  
/*
* @param data 参数列表
* @return
*/
function handleParams (data) {
    return qs.stringify(data);
}
  
  
export default {
    /*
     * @param url
     * @param data
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
    post (url, data, response, exception) {
        axios({
            method: 'post',
            //url: handleUrl(url),
            url: url,
            data: handleParams(data),
            timeout: TIME_OUT_MS,
            headers: {
                //'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(
            (result) => {
                response(handleResults(result))
            }
        ).catch(
            (error) => {
                if (exception) {
                    exception(error)
                } else {
                    console.log(error)
                }
            }
        )
    },
    /*
     * get 请求
     * @param url
     * @param response 请求成功时的回调函数
     * @param exception 异常的回调函数
     */
    get (url,data, response, exception) {
        axios({
            method: 'get',
            url: url,
            params:data,
            timeout: TIME_OUT_MS,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(
            (result) => {
                response(handleResults(result))
            }
        ).catch(
            (error) => {
                console.log("error"+response);
                if (exception) {
                    exception(error)
                } else {
                    console.log(error)
                }
            }
        )
    }
}