<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="my_income">
      <div class="my-top">
        <div
          class="ranking_title"
        >在线{{minerInfo.onlineCnt}}3台,离线{{minerInfo.offlineCnt}}1台, 磁盘异常1111台</div>
        <div class="ranking" @click="goRanking()">
          <img src="../../assets/images/paihangbang.png" alt>排行榜
        </div>
      </div>

      <div class="ranking_con">
        <div class="ranking_con_item" v-for="(item,index) in minerInfo.data" v-bind:key="index">
          <div class="con_item_l">
            <div class="item_l_top">
              <div>
                <img src="../../assets/images/zaixian.png" alt>
              </div>
              <div class="item_l_name">{{item.minername}}</div>
              <span>{{item.minerStatus}}</span>
            </div>
            <div class="item_l_No">SN:{{item.minerid}}</div>
          </div>
          <div class="con_item_r">
            <div class="item_r_btn" @click="settingMiner(item)">启动</div>
            <div class="item_r_img" @click="goInfo(item)">
              <img src="../../assets/images/evenmore.png">
            </div>
          </div>
        </div>
      </div>
      <div class="bind_new" @click="goBind()">+ 绑定新稀有机</div>
    </div>
    <!-- <van-tabbar v-model="actives">
      <van-tabbar-item icon="home-o" to="management">稀有机管理</van-tabbar-item>
      <van-tabbar-item icon="search" to="minemachine">我的收益</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar> -->
     <tabbar v-model="active"> </tabbar>
  </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { TabbarItem, Toast } from "vant";
import { getMiner, setTing } from "../../common/js/api.js";
import tabbar from "../../components/foot";

export default {
  data() {
    return {
      title: "稀有机管理",
      active: 0,
      icon: {
        active: 0
      },
      minerInfo: {
        data: [
          {
            minername: "我的稀有机一",
            minerid: "FA12345GXete245u7002r428",
            minerStatus: "磁盘异常"
          },
          {
            minername: "我的稀有机二",
            minerid: "FA12345GXete245u7002r428",
            minerStatus: "在线"
          },
          {
            minername: "我的稀有机三",
            minerid: "FA12345GXete245u7002r428",
            minerStatus: "离线"
          }
        ]
      },
      minerStatus: true
    };
  },
  mounted: function() {
    //获取我的稀有机信息
    let param = new Object();
    let nowtoken = this.$store.state.token;
    if (nowtoken == undefined || nowtoken == null) {
      nowtoken = "";
    }
    param.userid = this.$store.state.userPhonenum;
    param.token = nowtoken;

    getMiner(param)
      .then(res => {
        console.log(res);
        let { data } = res;
        if (res.res.code != 200) {
          this.minerInfo = response.data;
          Toast("查询失败");
        } else {
          this.minerInfo = res.res;
          console.log(this.minerInfo);
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    //启动，暂停稀有机
    settingMiner(item) {
      let param = new Object();
      param.minerId = item.minerNum;
      if (this.minerStatus == true) {
        this.minerStatus = false;
      } else {
        this.minerStatus = true;
      }
      param.minerStatus = this.minerStatus;
      getMiner(param)
        .then(response => {
          console.log(response);
          let { result } = response;
          if (result == "ok") {
            Toast("已成功");
            //this.minerInfo = response.data;
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    goLink() {
      this.$router.push({ path: "/login" });
    },
    //稀有机详情
    goInfo(item) {
      console.log(item);
      this.$router.push({
        path: "/managementinfo",
        query: { minerNum: item.minerid }
      });
    },
    //绑定新稀有机
    goBind() {
      this.$router.push({ path: "/binding" });
    },
    //排行榜
    goRanking() {
      this.$router.push({ path: "/allranking" });
    }
  },
  components: {
    navBar: navBar,
    tabbar:tabbar
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

  // background:rgba(34,42,69,1);
}
.my_income {
  height: auto;
  overflow: hidden;
  .my-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 0.94rem;
    line-height: 0.94rem;
    .ranking {
      width: 1.34rem;
      height: 0.4rem;
      font-size: 0.28rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(255, 70, 124, 1);
      margin-right: 0.3rem;
      line-height: 0.4rem;
      img {
        width: 0.26rem;
        height: 0.26rem;
        margin-right: 0.1rem;
      }
    }
    .ranking_title {
      margin-left: 0.3rem;
      font-size: 0.24rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(136, 143, 169, 1);
      line-height: 0.34rem;
    }
  }
  .ranking_con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .ranking_con_item {
      width: 6.9rem;
      height: 1.2rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      margin: auto;
      padding-left: 0.3rem;
      margin-top: 0.2rem;
      // &:hover {
      //   background: #cccccc;
      // }
    }
    .con_item_l {
      display: flex;
      flex-direction: column;
      .item_l_top {
        display: flex;
        flex-direction: row;
        // line-height: 0.42rem;
        font-size: 0.3rem;
        align-items: center;
        img {
          width: 0.16rem;
          height: 0.16rem;
        }
        .item_l_name {
          text-align: left;
          margin: 0 0.2rem;
        }
        span {
          display: inline-block;
          text-align: left;
          font-size: 0.26rem;
          color: rgba(158, 169, 211, 1);
        }
      }
      .item_l_No {
        color: rgba(158, 169, 211, 1);
        text-align: left;
        line-height: 0.42rem;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: 1.2rem;
        height: 0.56rem;
        background: #ff467c;
        border-radius: 0.12rem;
        display: flex;
        color: #ffffff;
        align-items: center;
        justify-content: center;
      }
      .item_r_img {
        width: 0.5rem;
        height: 0.4rem;
        line-height: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-top: 0.1rem;
          width: 0.12rem;
          height: 0.21rem;
        }
      }
    }
  }
  .bind_new {
    width: 6.88rem;
    height: 0.94rem;
    border-radius: 0.12rem;
    border: 0.02rem dashed #646b97;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(158, 169, 211, 1);
    line-height: 0.94;
  }
}
</style>
