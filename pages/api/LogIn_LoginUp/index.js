import { getAxios, postAxios } from '../../../untils/server'


const Login = (params) => {
    return postAxios({url: '/customers/register', data: {...params}})
}

export { Login };