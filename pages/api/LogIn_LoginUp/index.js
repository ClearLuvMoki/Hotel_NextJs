import { getAxios, postAxios } from '../../../untils/server'


// 注册
const Login = (params) => {
    return postAxios({url: '/customers/register', data: {...params}})
}

// 登陆
const LogUp = (params) => {
    return postAxios({url: '/customers/login', data: {...params}})
}

export { Login, LogUp };