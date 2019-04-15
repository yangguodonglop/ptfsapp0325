// import { get, post } from './http'
import axios from 'axios'

let ownbase = 'http://47.99.210.48:8086'// 服务器接口
// let ownbase='http://192.168.0.182:9999'//本地接口
let ownbase1 = 'http://192.168.0.182:8089'// 本地接口

// 登录注册
export const querySummary = params => { return axios.post(`${ownbase}/overview/querySummary`, params).then(res => res.data) }
// 电话号码验证，点击下一步
export const authen = params => { return axios.post(`${ownbase1}/login/authen`, params).then(res => res.data) }

// 获取验证码
export const testCode = params => { return axios.post(`${ownbase1}/login/testCode`, params).then(res => res.data) }
// 退出登录
export const loginout = params => { return axios.post(`${ownbase1}/login/loginout`, params).then(res => res.data) }

// 绑定矿机
export const bindMiner = params => { return axios.post(`${ownbase1}/login/bindMiner`, params).then(res => res.data) }
// 设置用户名称
export const setUserName = params => { return axios.post(`${ownbase1}/login/setUserName`, params).then(res => res.data) }

// 我的矿机
// 获取我的矿机
export const getMiner = params => { return axios.post(`${ownbase1}/Minerinfo/getMiner`, params).then(res => res.data) }
// 获取我的矿机详情
export const getMinerInfo = params => { return axios.post(`${ownbase1}/Minerinfo/getMinerInfo`, params).then(res => res.data) }
// 重启矿机
export const reStart = params => { return axios.post(`${ownbase1}/Minerinfo/reStart`, params).then(res => res.data) }
// 关闭矿机
export const reClose = params => { return axios.post(`${ownbase1}/Minerinfo/reClose`, params).then(res => res.data) }
// 解绑矿机
export const reUntied = params => { return axios.post(`${ownbase1}/Minerinfo/reUntied`, params).then(res => res.data) }
// 矿机挖矿详情列表
export const mininglist = params => { return axios.post(`${ownbase1}/Minerinfo/mininglist`, params).then(res => res.data) }
// 启动，暂停矿机
export const setTing = params => { return axios.post(`${ownbase1}/Minerinfo/setTing`, params).then(res => res.data) }

// 矿机用户添加矿机设备
export const adddevice = params => { return axios.post(`${ownbase1}/Minerinfo/adddevice`, params).then(res => res.data) }

// 矿机收益
// 我的矿机收益
export const incomeList = params => { return axios.post(`${ownbase1}/MinerIncome/incomeList`, params).then(res => res.data) }
// 矿机排名
export const rankList = params => { return axios.post(`${ownbase1}/MinerIncome/rankList`, params).then(res => res.data) }
// 我的收益
export const myIncome = params => { return axios.post(`${ownbase1}/MinerIncome/myIncome`, params).then(res => res.data) }
// 提币记录
export const getMoneyList = params => { return axios.post(`${ownbase1}/MinerIncome/getMoneyList`, params).then(res => res.data) }

// 收益明细
export const getMoneyListdetails = params => { return axios.post(`${ownbase1}/MinerIncome/getMoneyListdetails`, params).then(res => res.data) }

// 提现信息获取
export const toMoney = params => { return axios.post(`${ownbase1}/MinerIncome/toMoney`, params).then(res => res.data) }
// 提现是否成功
export const toMoneyInfo = params => { return axios.post(`${ownbase1}/MinerIncome/toMoneyInfo`, params).then(res => res.data) }

// 个人中心
// 个人中心主页
export const userInfoCenter = params => { return axios.post(`${ownbase1}/MinerUser/userInfoCenter`, params).then(res => res.data) }
// 个人信息
export const userInfo = params => { return axios.post(`${ownbase1}/MinerUser/userInfo`, params).then(res => res.data) }
// 个人信息更改
export const userInfoChange = params => { return axios.post(`${ownbase1}/MinerUser/userInfoChange`, params).then(res => res.data) }
// 获取验证码
export const userInfoGetcode = params => { return axios.post(`${ownbase1}/MinerUser/userInfoGetcode`, params).then(res => res.data) }
// 个人中心手机号码变更
export const userInfoPhone = params => { return axios.post(`${ownbase1}/MinerUser/userInfoPhone`, params).then(res => res.data) }
// 个人中心初始化交易密码
export const setPassword = params => { return axios.post(`${ownbase1}/MinerUser/setPassword`, params).then(res => res.data) }
// 个人中心更改交易密码
export const updatePassword = params => { return axios.post(`${ownbase1}/MinerUser/updatePassword`, params).then(res => res.data) }
