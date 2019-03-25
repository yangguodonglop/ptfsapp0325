<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
       <div class="user">
          <div class="user_con">
              <div class="user_con_item">
                  <div class="con_item_l"><input type="text" placeholder=" 输入原6位交易密码"></div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l"><input type="text" placeholder=" 输入新的6位交易密码"></div>
              </div>
               <div class="user_con_item user_con_item_active">
                  <div class="con_item_l"><input type="text" placeholder=" 确认新的交易密码"></div>
              </div>
             
          </div>

          
            <div class="introduction_start" @click="goLink()">修改完成</div>

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
      title: "交易密码修改",
      active: 2,
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
  .user {
    width: 90%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    .user_con {
      width: 95%;
      height: auto;
      margin: 0 auto;
      .user_con_item {
        width: 80%;
        height: 1rem;
        border-bottom: #cccccc 1px solid;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0rem 0rem;
        box-sizing: border-box;
        margin: 0 auto;
        &:nth-child(1) {
          margin-top: 0.4rem;
        }
        input {
          background: none;
          border: none;
        }
        &.user_con_item_active {
          .con_item_l {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .codeYzm {
            width: 1.4rem;
            height: 0.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #cccccc;
            color: #ffffff;
            border-radius: 0.1rem;
          }
        }
      }
    }
    .out_login {
      width: 100%;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      background: #ffffff;
      color: red;
      margin-top: 1.5rem;
    }
  }
}

.introduction_start {
  font-size: 0.4rem;
  color: #ffffff;
  width: 5.6rem;
  margin: 0 auto;
  height: 0.9rem;
  background: #cccccc;
  margin-top: 2.5rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
