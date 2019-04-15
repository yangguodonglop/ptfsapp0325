<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking">
          <!-- <div class="ranking_title">收益排行榜</div> -->
          <!-- <div class="ranking_time">更新于{{incomeArr.minerIncomeTime}}</div> -->
          <div class="ranking_con">
              <div class="ranking_con_title">
                  <div class="tltle_l">名次</div>
                  <div class="tltle_m">收益</div>
                  <div class="tltle_r">矿友</div>
              </div>
              <div class="ranking_item" v-for="(item,index) in incomeArr.miningIncome" v-bind:key="index">
                  <div class="ranking_item_l" :class="{'ranking_item_l1':index==0,'ranking_item_l2':index==1,'ranking_item_l3':index==2}">{{index+1}}</div>
                  <div class="ranking_item_r">{{item.minerIncomeText}}.poc</div>
                  <div class="ranking_item_m">{{item.minerIncomeFriend}}</div>
              </div>
          </div>
                    <div class="ranking_time">更新于{{incomeArr.minerIncomeTime}}</div>

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
import { Tabbar, TabbarItem, Toast } from "vant";
import { incomeList } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "收益排行",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      incomeArr: {}
    };
  },
  mounted: function() {
    //获取稀有机详情信息
    let param = new Object();
    param.minerId = "";
    incomeList(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.incomeArr = response.data;
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
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #222a45;
  .ranking {
    overflow: hidden;
    margin: 0 auto;
    width: 6.9rem;
    height: auto;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    margin-top: 0.3rem;
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
    .ranking_time {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;

      color: #7e869f;
    }
    .ranking_con_title {
      width: 100%;
      height: 1rem;
      background: none;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      color: #7e869f;
      font-size: 0.24rem;
      border-bottom: #38446f 1px solid;
      .tltle_l {
        padding-left: 0.4rem;
      }
      .tltle_r {
        padding-right: 0.4rem;
      }
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
     
        display: flex;
        justify-content: center;
       // align-items: center;
        //background-color: #cccccc;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.4rem;
        background:url('../../assets/images/ranking_04.png') no-repeat center;
        background-size: 0.4rem 0.4rem;
        &.ranking_item_l1{
            width: 0.4rem;
        height: 0.4rem;
     
        display: flex;
        justify-content: center;
       // align-items: center;
        //background-color: #cccccc;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.4rem;
        background:url('../../assets/images/ranking_01.png') no-repeat center;
        background-size: 0.4rem 0.4rem;
        }
        
        &.ranking_item_l2{
            width: 0.4rem;
        height: 0.4rem;
     
        display: flex;
        justify-content: center;
       // align-items: center;
        //background-color: #cccccc;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.4rem;
        background:url('../../assets/images/ranking_02.png') no-repeat center;
        background-size: 0.4rem 0.4rem;
        }
        &.ranking_item_l3{
            width: 0.4rem;
        height: 0.4rem;
     
        display: flex;
        justify-content: center;
       // align-items: center;
        //background-color: #cccccc;
        font-size: 0.24rem;
        color: #fff;
        margin-left: 0.4rem;
        background:url('../../assets/images/ranking_03.png') no-repeat center;
        background-size: 0.4rem 0.4rem;
        }
      }
      .ranking_item_m{
        padding-right: 0.4rem;
      }
    }
  }
}
</style>
