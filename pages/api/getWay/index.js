import { getAxios, postAxios } from '../../../untils/server'

// 获取白拼单图片等信息

const getSettingInfo = () => {
    return postAxios({url: '/fronted/setting/info'})
}

export { getSettingInfo }