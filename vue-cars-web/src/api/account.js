import service from "../utils/request";
/**
 * 获取验证码
 */
export function GetCode(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/getSms/`,
        data
    })
}

/**
 * 注册
 */
export function Register(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/register/`,
        data
    })
}

/**
 * 登录
 */
export function Login(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/login/`,
        data
    })
}


/**
 * 登录
 */
export function Forget(data){
    return service.request({
        method: "post",
        url: `${process.env.VUE_APP_API_WEB}/account/forget/`,
        data
    })
}
