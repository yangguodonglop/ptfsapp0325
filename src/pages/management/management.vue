<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
        <div class="my_income">
            <div class="ranking" @click="goRanking()">排行榜</div>
            <div class="ranking_title">在线{{minerInfo.onlineCnt}}台，离线{{minerInfo.offlineCnt}}台</div>
            <div class="ranking_con">
              <div class="ranking_con_item" v-for="(item,index) in minerInfo.deviceArr" v-bind:key="index">
                    <div class="con_item_l">
                        <div class="item_l_name">{{item.minerName}}</div>
                        <div class="item_l_No">{{item.minerNum}}</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn" @click="settingMiner(item)">{{item.minerStatus}}</div>
                        <div class="item_r_img" @click="goInfo(item)"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="bind_new" @click="goBind()">
                绑定新矿机
            </div>
         
        </div>
        <van-tabbar v-model="actives">
               <van-tabbar-item icon="home-o" to='management'>矿机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { Tabbar, TabbarItem } from "vant";
import { getMiner, setTing } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "矿机管理",
      actives: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      minerInfo: {
        deviceArr: []
      },
      minerStatus: true
    };
  },
  mounted: function() {
    //获取我的矿机信息
    let param = new Object();
    param.photoNum = 15951813234;
    getMiner(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          this.minerInfo = response.data;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    //启动，暂停矿机
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
          let { data } = response;
          if (data != null) {
            this.minerInfo = response.data;
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    goLink() {
      this.$router.push({ path: "/login" });
    },
    //矿机详情
    goInfo(item) {
      console.log(item);
      this.$router.push({
        path: "/managementinfo",
        query: { minerNum: item.minerNum }
      });
    },
    //绑定新矿机
    goBind() {
      this.$router.push({ path: "/binding" });
    },
    //排行榜
    goRanking() {
      this.$router.push({ path: "/allranking" });
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
}
.my_income {
  width: 100%;
  height: auto;
  overflow: hidden;
  .ranking {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: flex-end;
    padding: 0.2rem;
    align-items: center;
    box-sizing: border-box;
  }
  .ranking_title {
    width: 100%;
    height: 0.8rem;
    display: flex;
    justify-content: start;
    padding: 0.2rem;
    align-items: center;
    box-sizing: border-box;
  }
  .ranking_con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .ranking_con_item {
      width: 100%;
      height: 1rem;
      display: flex;
      padding: 0rem 0.2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      &:hover {
        background: #cccccc;
      }
    }
    .con_item_l {
      display: flex;
      flex-direction: column;
      .item_l_name {
        text-align: left;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: 1rem;
        height: 0.4rem;
        background: #fff;
        color: #ffffff;
        font-size: 0.2rem;
        border-radius: 0.3rem;
        display: flex;
        color: #000;

        align-items: center;

        justify-content: center;
      }
      .item_r_img {
        width: 0.5rem;
        height: 0.4rem;

        display: flex;

        align-items: center;

        justify-content: center;
        img {
          width: 0.12rem;
          height: 0.21rem;
        }
      }
    }
  }
  .bind_new {
    width: 95%;
    height: 1.2rem;
    margin: 0 auto;
    border-radius: 0.1rem;
    border: 2px dashed #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
