<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="device_info" v-for="(item,index) in minerInfoArr" v-bind:key="index">
          <div class="device_info_img" @click="goRanking()"><img src="../../assets/images/sidebar.png"></div>
          <div class="device_info_space">
              <van-circle
                    v-model="currentRate"
                    :rate="parseInt(item.minerPercentage)"
                    :speed="100"
                    :text="text"
                    :stroke-width="60"
                     size="140px"
                    />
                    <div class="device_already">
                      {{item.minerUsed}}/{{item.minerTotal}}
                    </div>
          </div>
          <div class="device_info_item">储存力：{{item.minerStorage}}</div>
          <div class="device_info_item">空间：{{item.minerSpace}}</div>
          <div class="device_info_item">上行宽带：{{item.minerBandwidth}}</div>
          <div class="device_info_item">在线时长：{{item.minerOnlinetime}}</div>
          <div class="device_btn">
              <div class="device_btn_item" @click="reStart()">重启</div>
              <div class="device_btn_item" @click="reClose()">关闭</div>
              <div class="device_btn_item" @click="reUntied()">解绑</div>
              <div class="device_btn_item" @click="goMining()">挖矿</div>
          </div>
          <div class="user_con">
              <div class="user_con_item">
                  <div class="con_item_l">设备名称</div>
                  <div class="con_item_r" v-if="setActive" @click="openSetname()">{{item.minerName}}</div>
                    <div class="con_item_r" v-else ><input type="text" v-model="device_name"><div @click="closeSetname()">确定</div></div>

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
               <van-tabbar-item icon="home-o" to='management'>矿机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarActive";
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
      device_name: "矿机一",
      currentRate: 0,
      setActive: true,
      show: false,
      rateNum: 0,
      minerInfoArr: [],
      minerStatus: ""
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  mounted: function() {
    //获取矿机详情信息
    let param = new Object();
    param.minerNumber = this.$route.query.minerNum;
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
    //矿机详情
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
          //重启矿机

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
          //关闭矿机
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
  background: #f2f2f2;
  .device_info {
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 0.2rem 0;
    .device_info_space {
      width: 100%;
      height: auto;
      position: relative;
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
      width: 90%;
      height: 1.4rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #999999;
      .device_btn_item {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        color: #666666;
        background: #999999;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        justify-content: center;
      }
    }
    .user_con {
      width: 90%;
      height: auto;
      margin: 0 auto;
      .user_con_item {
        width: 100%;
        height: 1rem;
        border-bottom: #cccccc 1px solid;
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
}
</style>
