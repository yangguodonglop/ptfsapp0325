//import { get, post } from './http'
import axios from 'axios';

let ownbase='http://192.168.0.182:9999'//本地接口
let ownbase1='http://192.168.0.182:8089'//本地接口


export const queryAllNodesProfiles= params => { return axios.post(`${ownbase}/PTFSNodeManage/queryAllNodesProfiles`, params).then(res => res.data); };
//获取验证码
export const login= params => { return axios.post(`${ownbase1}/login/getCode`, params).then(res => res.data); };
//绑定矿机
export const bindMiner= params => { return axios.post(`${ownbase1}/login/bindMiner`, params).then(res => res.data); };
//设置用户名称
export const setUserName= params => { return axios.post(`${ownbase1}/login/setUserName`, params).then(res => res.data); };


//获取我的矿机
export const getMiner= params => { return axios.post(`${ownbase1}/Minerinfo/getMiner`, params).then(res => res.data); };
//获取我的矿机详情
export const getMinerInfo= params => { return axios.post(`${ownbase1}/Minerinfo/getMinerInfo`, params).then(res => res.data); };
//重启矿机
export const reStart= params => { return axios.post(`${ownbase1}/Minerinfo/reStart`, params).then(res => res.data); };
//关闭矿机
export const reClose= params => { return axios.post(`${ownbase1}/Minerinfo/reClose`, params).then(res => res.data); };
//解绑矿机
export const reUntied= params => { return axios.post(`${ownbase1}/Minerinfo/reUntied`, params).then(res => res.data); };
//矿机挖矿详情列表
export const mininglist= params => { return axios.post(`${ownbase1}/Minerinfo/mininglist`, params).then(res => res.data); };
//启动，暂停矿机
export const setTing= params => { return axios.post(`${ownbase1}/Minerinfo/setTing`, params).then(res => res.data); };


//我的矿机收益
export const incomeList= params => { return axios.post(`${ownbase1}/MinerIncome/incomeList`, params).then(res => res.data); };
//矿机排名
export const rankList= params => { return axios.post(`${ownbase1}/MinerIncome/rankList`, params).then(res => res.data); };
//我的收益
export const myIncome= params => { return axios.post(`${ownbase1}/MinerIncome/myIncome`, params).then(res => res.data); };
//提币记录
export const getMoneyList= params => { return axios.post(`${ownbase1}/MinerIncome/getMoneyList`, params).then(res => res.data); };

//收益明细
export const getMoneyListdetails= params => { return axios.post(`${ownbase1}/MinerIncome/getMoneyListdetails`, params).then(res => res.data); };





