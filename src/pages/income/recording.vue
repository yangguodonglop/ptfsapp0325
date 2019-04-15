<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking_con">
                <div class="ranking_con_item" v-for="(item,index) in moneyArr" v-bind:key="index">
                    <div class="con_item_l">
                        <div class="item_l_name"><p>{{item.moneyNum}}</p><p class="item_p">POC</p></div>
                        <div class="item_l_No">{{item.moneyAddress}}</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">{{item.moneyTime}}</div>
                        <!-- <div class="item_r_img" @click="showList()" > 
                            <img src="../../assets/images/evenmore.png">
                        </div> -->
                    </div>
                </div>
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
import { getMoneyList } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "提币记录",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      showStatus: false,
      moneyArr: []
    };
  },
  mounted: function() {
    let param = new Object();
    param.minerPhoneNum = this.$store.state.token;
    getMoneyList(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.moneyArr = response.data.moneyList;
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
    showList() {
      this.showStatus = !this.showStatus;
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
  .ranking_con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .ranking_con_item {
      display: flex;
      padding: 0rem 0.2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 0.28rem;
      width: 6.9rem;
      height: 1rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      margin: 0 auto;
      margin-top: 0.1rem;
      &:hover {
        background: #cccccc;
      }
    }
    .con_item_l {
      display: flex;
      flex-direction: column;
      .item_l_name {
        text-align: left;
        color: #ffffff;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        p{
          font-size: 0.32rem;
        }
        .item_p{
          font-size: 0.2rem;
        }
      }
      .item_l_No{
        color: #9EA9D3;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: auto;
        height: 0.4rem;

        display: flex;
        color: #7E869F;
        font-size: 0.2rem;

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
}
</style>
