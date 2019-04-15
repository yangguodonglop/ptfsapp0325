<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking">
          <van-tabs v-model="active_ranking" color="#FF467C" title-inactive-color="#ffffff" background="none">
                <van-tab title="稀有机排名">
               
                        <div class="ranking_con">
                            <div class="ranking_con_title">
                                <div class="tltle_l">名次</div>
                                <div class="tltle_m">稀有机数量</div>
                                <div class="tltle_r">矿友</div>
                            </div>
                            <div class="ranking_item" v-for="(item,index) in rankList.rankListArr" v-bind:key="index">
                                <div class="ranking_item_l" :class="{'ranking_item_l1':index==0,'ranking_item_l2':index==1,'ranking_item_l3':index==2}">{{index+1}}</div>
                                <div class="ranking_item_r">{{item.minerIncomeText}}</div>
                                <div class="ranking_item_m">{{item.minerIncomeFriend}}</div>
                            </div>
                        </div>
                                 <div class="ranking_time">更新于{{rankList.minerIncomeTime}}</div>
                </van-tab>
                <van-tab title="储存力排名">
                       
                        <div class="ranking_con">
                            <div class="ranking_con_title">
                                <div class="tltle_l">名次</div>
                                <div class="tltle_m">存储力</div>
                                <div class="tltle_r">矿友</div>
                            </div>
                            <div class="ranking_item" v-for="(item,index) in rankList.rankListStorage" v-bind:key="index">
                                <div class="ranking_item_l" :class="{'ranking_item_l1':index==0,'ranking_item_l2':index==1,'ranking_item_l3':index==2}">{{index+1}}</div>
                                <div class="ranking_item_r">{{item.minerIncomeText}}</div>
                                <div class="ranking_item_m">{{item.minerIncomeFriend}}</div>
                            </div>
                      </div>
                       <div class="ranking_time">更新于{{rankList.minerIncomeTime}}</div>
                </van-tab>
            </van-tabs> 
      </div>
        
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to='management'>稀有机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Tabbar, TabbarItem } from "vant";
import { rankList } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "稀有机排名",
      active: 1,
      active_ranking: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      rankList: {}
    };
  },
  mounted: function() {
    //获取稀有机排名信息
    let param = new Object();
    param.minerId = "";
    rankList(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.rankList = response.data;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    }
  },
  components: {
    navBar: navBar
  }
};
</script>
 
<style lang="less" scoped >
.van-tabs__nav{
  background: #fff !important;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #222a45;
  .ranking {
    .ranking_con{
  
          width: 6.9rem;
    height: auto;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
     
    margin: 0 auto;
       margin-top: 0.5rem;
    }
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 0.3rem;

    .ranking_time {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;

      color: #7e869f;
    }
    .ranking_title {
      width: 95%;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.34rem;
      font-weight: bold;
      color: #000;
      margin: 0 auto;
    }

    .ranking_con_title {
      width: 95%;
      height: 1rem;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 0.1rem;
      box-sizing: border-box;
      color: #7E869F;
      border-bottom: #38446F 1px solid;
    }
    .ranking_item {
      width: 100;
      height: 1rem;
      margin: 0 auto;
      border-bottom: 1px solid #252e4d;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      .ranking_item_l {
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.4rem;
        display: flex;
        justify-content: center;
        // align-items: center;
        //background-color: #cccccc;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.4rem;
        background: url("../../assets/images/ranking_04.png") no-repeat center;
        background-size: 0.4rem 0.4rem;
        &.ranking_item_l1 {
          width: 0.4rem;
          height: 0.4rem;

          display: flex;
          justify-content: center;
          // align-items: center;
          //background-color: #cccccc;
          font-size: 0.24rem;
          color: #fff;
          margin-left: 0.4rem;
          background: url("../../assets/images/ranking_01.png") no-repeat center;
          background-size: 0.4rem 0.4rem;
        }

        &.ranking_item_l2 {
          width: 0.4rem;
          height: 0.4rem;

          display: flex;
          justify-content: center;
          // align-items: center;
          //background-color: #cccccc;
          font-size: 0.24rem;
          color: #fff;
          margin-left: 0.4rem;
          background: url("../../assets/images/ranking_02.png") no-repeat center;
          background-size: 0.4rem 0.4rem;
        }
        &.ranking_item_l3 {
          width: 0.4rem;
          height: 0.4rem;

          display: flex;
          justify-content: center;
          // align-items: center;
          //background-color: #cccccc;
          font-size: 0.24rem;
          color: #fff;
          margin-left: 0.4rem;
          background: url("../../assets/images/ranking_03.png") no-repeat center;
          background-size: 0.4rem 0.4rem;
        }
      }
      .ranking_item_m {
        padding-right: 0.4rem;
      }
    }
  }
}
</style>
