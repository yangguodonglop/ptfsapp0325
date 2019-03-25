<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
        <div class="mining">
            <div class="mining_title">{{miningMInername}}</div>
            <div class="mining_item" :class="{'mining_item_active':index==0}" v-for="(item,index) in miningArr" v-bind:key="index">
                <div class="mining_item_l">{{item.minerTime}}</div>
                <div class="mining_item_r">{{item.minerIncome}}</div>
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
import { Tabbar, TabbarItem } from "vant";
import { mininglist } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "挖矿",
      active: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      miningArr: [],
      miningMInername: ""
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerNumber = this.$route.query.minerId;
    mininglist(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);

          this.miningArr = response.data.miningArr;
          this.miningMInername = response.data.minerName;
          console.log(this.miningArr);
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    },
    //矿机详情
    goInfo() {
      this.$router.push({ path: "/managementinfo" });
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
  .mining {
    width: 100%;
    height: auto;
    overflow: hidden;
    .mining_title {
      width: 95%;
      height: 0.8rem;
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      color: #000;
      font-weight: bold;
      margin: 0 auto;
    }
    .mining_item {
      width: 100%;
      height: auto;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #cccccc;
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-top: 0.4rem;
      color: #ffffff;
      &.mining_item_active {
        margin-top: 0rem;
        background: #ffcc43;
      }
    }
  }
}
</style>
