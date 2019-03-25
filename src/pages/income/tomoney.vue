<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="tomoney">
          <div class="tomoney_con">
              <div class="tomoney_con_item">提币地址</div>
              <div class="tomoney_con_item con_item_active">87DG34JS78CF234KJ2431K</div>
              <div class="tomoney_con_item">提取币额<p>（当日挖矿收益在7日后解锁）</p></div>
              <div class="tomoney_con_item con_item_active"><input type="text"></div>
              <div class="tomoney_con_item"><p>可提币额 99.99POC</p></div>
              <div class="tomoney_con_item"><p class="active_p">手续费（1%）：0.01POC</p></div>
              <div class="tomoney_con_item con_item_active con_item_input"><input type="text" placeholder="请输入六位数交易密码"></div>
              <div class="tomoney_btn">
                提现
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
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {
      title: "我的提现",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      sum_earnings: null
    };
  },
  mounted: function() {},
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
  background: #f2f2f2;
  .tomoney {
    width: 100%;
    height: auto;
    overflow: hidden;
    .tomoney_con {
      width: 95%;
      height: auto;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      //text-align: left;
      .tomoney_con_item {
        &:nth-child(1) {
          margin-top: 0.3rem;
        }
        display: flex;
        justify-content: flex-start;
        height: 0.6rem;
        align-items: center;
        p {
          font-size: 0.2rem;
        }
        .active_p {
          color: red;
        }
        font-size: 0.3rem;
        &.con_item_active {
          border-bottom: 1px solid #999999;
          font-size: 0.26rem;
          input {
            border: none;
            background: none;
            font-size: 0.26rem;
          }
        }
        &.con_item_input {
          width: 100%;
          background: #ffffff;

          margin: 0 auto;
          margin-top: 0.4rem;
          input{
            width: 100%;
          }
        }
      }
      .tomoney_btn {
        width: 2rem;
        height: 0.6rem;
        background: #cccccc;
        color: #ffffff;
        font-size: 0.2rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
