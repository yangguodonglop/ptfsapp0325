<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="device_info" v-for="(item,index) in minerInfoArr" v-bind:key="index">
      <div class="device_info_left">
        <img src="../../assets/images/zaixian.png" alt>
        <span>{{item.minnerstatus}}</span>
      </div>
      <div class="device_info_img" @click="goRanking()">
        <img src="../../assets/images/sidebar.png">
      </div>
      <div class="device_info_space">
        <van-circle
          v-model="currentRate"
          color="#FF467C"
          layer-color="#646B97"
          :rate="parseInt(item.minerPercentage)"
          :speed="100"
          :text="text"
          :stroke-width="60"
          size="2.76rem"
        />
        <div class="device_already">{{item.minerUsed}}/{{item.minerTotal}}</div>
      </div>
      <!-- <div class="device_info_item">储存力：{{item.minerStorage}}</div>
          <div class="device_info_item">空间：{{item.minerSpace}}</div>
          <div class="device_info_item">上行宽带：{{item.minerBandwidth}}</div>
      <div class="device_info_item">在线时长：{{item.minerOnlinetime}}</div>-->
      <div class="device_btn">
        <div class="device_btn_item" @click="reStart()">
          <img src="../../assets/images/chongqi.png" alt>
        </div>
        <div class="device_btn_item" @click="reClose()">
          <img src="../../assets/images/guanbi.png" alt>
        </div>
        <div class="device_btn_item" @click="reUntied()">
          <img src="../../assets/images/duankai.png" alt>
        </div>
        <div class="device_btn_item" @click="goMining()">
          <img src="../../assets/images/wakuang.png" alt>
        </div>
      </div>
      <div class="user_con">
        <div class="user_con_item">
          <div class="con_item_l">设备名称</div>
          <div class="con_item_r" v-if="setActive" @click="openSetname()">
            {{item.minerName}}
            <img src="../../assets/images/evenmore.png" alt>
          </div>
          <div class="con_item_r" v-else>
            <input type="text" v-model="device_name">
            <div @click="closeSetname()">确定</div>
          </div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">设备型号：</div>
          <div class="con_item_r">{{item.minerModel}}</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">序列号：</div>
          <div class="con_item_r">{{item.minerSequence}}</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">MAC地址：</div>
          <div class="con_item_r">{{item.minerAddress}}</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">内网IP：</div>
          <div class="con_item_r">{{item.minerIp}}</div>
        </div>
      </div>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="management">稀有机管理</van-tabbar-item>
      <van-tabbar-item icon="search" to="minemachine">我的收益</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Tabbar, TabbarItem, Circle, Dialog, Toast } from "vant";

import {
  getMinerInfo,
  reStart,
  reClose,
  reUntied
} from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "挖矿详情",
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      device_name: "稀有机一",
      currentRate: 0,
      setActive: true,
      show: false,
      rateNum: 0,
      minerInfoArr: [
        {
          minnerstatus: "在线",
          minerPercentage: 75,
          minerUsed: "750.0GB",
          minerTotal: "999.9GB",
          minerName: "稀有机001",
          minerModel: "XD99",
          minerSequence: "3434643126757",
          minerAddress: "3D-5G-6G-7H-4B",
          minerIp: "192.168.0.1"
        }
      ],
      minerStatus: ""
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  mounted: function() {
    //获取稀有机详情信息
    let param = new Object();
    let nowtoken = this.$store.state.token;
    alert(this.$route.query.minerNum);
    param.userid = this.$store.state.userPhonenum;
    alert(this.$route.query.minerNum);
    param.minerid = this.$route.query.minerNum;
    param.token = nowtoken;
    param.date = "";
    getMinerInfo(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.minerInfoArr = response.data.minerArr;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goRanking() {
      this.$router.push({ path: "/ranking" });
    },
    //稀有机详情
    goInfo() {
      this.$router.push({ path: "/login" });
    },
    openSetname() {
      this.setActive = false;
    },
    closeSetname() {
      this.setActive = true;
    },
    //重启
    reStart() {
      this.show = true;
      Dialog.confirm({
        title: "重启",
        message: "确认重启该设备"
      })
        .then(() => {
          //重启稀有机

          let param = new Object();
          param.minerId = this.$route.query.minerNum;
          param.minerStatus = "reStart";
          reStart(param)
            .then(response => {
              let { data } = response;
              if (data != null) {
                Toast("设备已重启");
              }
            })
            .catch(error => {
              Toast("网络错误，请重新请求");
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    //关闭
    reClose() {
      this.show = true;
      Dialog.confirm({
        title: "关闭",
        message: "确认关闭该设备"
      })
        .then(() => {
          //关闭稀有机
          let param = new Object();
          param.minerId = this.$route.query.minerNum;
          param.minerStatus = "reClose";
          reClose(param)
            .then(response => {
              let { data } = response;
              if (data != null) {
                Toast("设备已关闭");
              }
            })
            .catch(error => {
              Toast("网络错误，请重新请求");
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    //解绑
    reUntied() {
      this.show = true;
      Dialog.confirm({
        title: "解绑",
        message:
          "确认解绑该设备<br/>!你的账户为提走的P币会清空<br/>!你不在享受该设备的挖矿功能<br/>!你上传该设备的数据将会被清空<br/>!该设备可被其他任意账号绑定"
      })
        .then(() => {
          let param = new Object();
          param.minerId = this.$route.query.minerNum;
          param.minerStatus = "reUntied";
          reUntied(param)
            .then(response => {
              let { data } = response;
              if (data != null) {
                Toast("设备已解绑");
              }
            })
            .catch(error => {
              Toast("网络错误，请重新请求");
            });
        })
        .catch(() => {
          // on cancel
        });
    },
    //挖矿
    goMining() {
      this.$router.push({
        path: "/mining",
        query: {
          minerId: this.$route.query.minerNum
        }
      });
    }
  },
  components: {
    navBar: navBar
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: rgba(34, 42, 69, 1);

  .device_info {
    overflow: hidden;
    padding: 0.2rem 0;
    width: 6.9rem;
    height: 10.64rem;
    color: #fff;
    margin: auto;
    margin-top: 0.3rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    .device_info_left {
      float: left;
      margin-left: 0.3rem;
      img {
        width: 0.16rem;
        height: 0.16rem;
      }
    }
    .device_info_space {
      width: 100%;
      height: auto;
      position: relative;
      margin-top: 0.6rem;
      /deep/.van-circle__text {
        color: #fff;
        font-size: 0.6rem;
        position: absolute;
        top: 1.1rem;
      }
      .device_already {
        left: 50%;
        top: 60%;
        position: absolute;
        transform: translate(-50%, -50%);
      }
    }
    .device_info_item {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-top: 0.1rem;
    }
    .device_btn {
      width: 4.28rem;
      height: 1.4rem;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .device_btn_item {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        color: rgba(34, 42, 69, 1);
        background: rgba(34, 42, 69, 1);
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        justify-content: center;
        img {
          width: 0.46rem;
          height: 0.46rem;
        }
      }
    }
    .user_con {
      width: 90%;
      height: auto;
      margin: 0 auto;
      border-top: 0.02rem solid #38446f;
      .user_con_item {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 0.1rem;
        box-sizing: border-box;
      }
    }
  }
}
.con_item_r {
  display: flex;
  justify-content: flex-start;
  color: #616c8a;
  img {
    width: 0.12rem;
    height: 0.24rem;
    margin-left: 0.1rem;
  }
  input {
    width: 2rem;
    margin-right: 0.2rem;
  }
}
.device_info_img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.4rem;
  img {
    width: 0.32rem;
    height: 0.32rem;
  }
}
</style>
