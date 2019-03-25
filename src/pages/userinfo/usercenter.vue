<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
       <div class="user">
          <div class="user_con">
              <div class="user_con_item">
                  <div class="con_item_l">愤怒得PP</div>
                  <div class="con_item_r" @click="goUserName()"><img src="../../assets/images/evenmore.png"></div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l">提币地址</div>
                  <div class="con_item_r"><img src="../../assets/images/evenmore.png"></div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l">交易密码</div>
                  <div class="con_item_r"><img src="../../assets/images/evenmore.png" @click="goPassword()"></div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l">版本信息</div>
                  <div class="con_item_r">1.1.0</div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l">关于我们</div>
                  <div class="con_item_r"><img src="../../assets/images/evenmore.png" @click="goAbout()"></div>
              </div>
              <div class="user_con_item">
                  <div class="con_item_l">隐私协议</div>
                  <div class="con_item_r"><img src="../../assets/images/evenmore.png" @click="goPrivacy()"></div>
              </div>
          </div>
          <div class="out_login">退出登录</div>
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
      title: "个人中心",
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
    },
    goUserName(){
      this.$router.push({path:"/user"}) 
    },
    goPassword(){
      this.$router.push({path:"/password"})
    },
    goAbout(){
      this.$router.push({path:"/about"})
    },
    goPrivacy(){
      this.$router.push({path:'/privacy'})
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
  .user{
    width: 100%;
    height: auto;
    overflow: hidden;
    .user_con{
      width: 95%;
      height: auto;
      margin: 0 auto;
    .user_con_item{
      width: 100%;
      height: 1rem;
      border-bottom: #cccccc 1px solid;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0rem 0.1rem;
      box-sizing: border-box;
    }
    }
    .out_login{
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

</style>
