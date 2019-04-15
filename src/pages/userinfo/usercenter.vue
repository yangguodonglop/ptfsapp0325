<template>
  <div class="container">
    <navBar class="navbar" :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="user">
      <div class="user_con">
        <div class="user_con_item">
          <div class="con_item_l">{{userName}}</div>
          <div class="con_item_r" @click="goUserName()">
            <img src="../../assets/images/evenmore.png">
          </div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">提币地址</div>
          <div class="con_item_r">
            <img src="../../assets/images/evenmore.png">
          </div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">交易密码</div>
          <div class="con_item_r">
            <img src="../../assets/images/evenmore.png" @click="goPassword()">
          </div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">版本信息</div>
          <div class="con_item_r">{{userersion}}</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">关于我们</div>
          <div class="con_item_r">
            <img src="../../assets/images/evenmore.png" @click="goAbout()">
          </div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">隐私协议</div>
          <div class="con_item_r">
            <img src="../../assets/images/evenmore.png" @click="goPrivacy()">
          </div>
        </div>
      </div>
      <div class="out_login" @click="loginOut()">退出登录</div>
    </div>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="management">稀有机管理</van-tabbar-item>
      <van-tabbar-item icon="search" to="minemachine">我的收益</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar> -->
    <tabbar v-model="active"></tabbar>
  </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { Tabbar, TabbarItem, Toast } from "vant";
import { userInfoCenter, loginout } from "../../common/js/api.js";
import tabbar from "../../components/foot";

export default {
  data() {
    return {
      title: "个人中心",
      active: 2,
      icon: {
         active: 2
      },
      userName: "",
      userersion: "",
      userInfoArr: [],
      userPsdstatus: ""
      // minerUseid:""
    };
  },
  mounted: function() {
    //个人中心主页信息
    let param = new Object();
    param.minerPhonenumber = this.$store.state.token;
    userInfoCenter(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.userName = response.data.userInfoArr[0].userName;
          this.userersion = response.data.userInfoArr[0].userersion;
          this.userPsdstatus = response.data.userInfoArr[0].userPsdstatus;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    //退出登录
    loginOut() {
      debugger;
      let param = new Object();
      param.userPhonenum = this.$store.state.userPhonenum;
      param.token = this.$store.state.token;
      loginout(param)
        .then(res => {
          console.log(res.response);
          if (res.response.errornum != "1") {
            Toast("退出登录失败");
          } else {
            Toast("退出登录成功");
            this.$store.commit("changeLogin", {
              token: ""
            });
            this.$store.commit("changeLoginPhone", {
              userPhonenum: ""
            });
            this.$router.push({ path: "/login" });
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    goLink() {
      this.$router.push({ path: "/login" });
    },
    goUserName() {
      this.$router.push({ path: "/user" });
    },
    goPassword() {
      //判断是否已经初始化过密码
      alert(this.userPsdstatus);
      if (this.userPsdstatus == "true") {
        this.$router.push({ path: "/password" });
      } else {
        this.$router.push({ path: "/updatepassword" });
      }
    },
    goAbout() {
      this.$router.push({ path: "/about" });
    },
    goPrivacy() {
      this.$router.push({ path: "/privacy" });
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
  background: #222a45;
  color: rgba(255, 255, 255, 1);
  .user {
    width: 100%;
    height: auto;
    overflow: hidden;
    .user_con {
      width: 95%;
      height: auto;
      margin: auto;
      margin-top: 0.3rem;
      .user_con_item {
        height: 0.88rem;
        background: rgba(41, 50, 83, 1);
        border-radius: 0.12rem;
        margin-bottom: 0.2rem;
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        font-size: 0.25rem;
        img {
          width: 0.12rem;
          height: 0.24rem;
        }
      }
    }
    .out_login {
      width: 5.9rem;
      height: 0.88rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      background: rgba(255, 70, 124, 1);
      border-radius: 12px;
      color: #fff;
      margin: 0.8rem 0.8rem 0;
    }
  }
}
</style>
