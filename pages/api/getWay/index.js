import { getAxios2, postAxios2 } from '../../../untils/server'

// 获取白拼单图片等信息

const getSettingInfo = () => {
    return getAxios2({url: '/fronted/setting/info'})||{}
}
const getFeaturedList = (params) => {
    return getAxios2({url: '/fronted/featured/list',params})||[]
}

// 获取国家
const getCountries = (params) => {
    return getAxios2({url: '/fronted/country',params})||[]
}

// 获取地区
const getCity = (params) => {
    return getAxios2({url: 'fronted/region/' + `${params.e}`,})||[]
}

export { getSettingInfo,getFeaturedList, getCountries, getCity }