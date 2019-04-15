<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="user">
      <div class="user_con">
        <div class="user_con_item">
          <div class="con_item_l topnumber">您正在为{{this.phoneNum}}变更手机号</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">
            <input type="text" v-model="phoneNumInput" placeholder=" 请输入新手机号码">
          </div>
        </div>
        <div class="user_con_item user_con_item_active">
          <div class="con_item_l">
            <input class="yanzhengma" type="text" placeholder=" 请输入验证码" v-model="YzmCodeInput">
            <div class="codeYzm" v-if="YzmStatus" @click="getCode()">获取验证码</div>
            <div class="codeYzm" v-if="!YzmStatus">{{count}}S</div>
          </div>
        </div>
      </div>
      <div class="introduction_start" @click="goLink()">完成</div>
      <div class="login_title">更换新手机后需重新登录</div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Toast } from "vant";
import { userInfoGetcode, userInfoPhone } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "手机号变更",
      active: 2,
      count: "",
      timer: null,
      YzmStatus: true,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      phoneNum: "",
      YzmCode: "",
      phoneNumInput: "",
      YzmCodeInput: ""
    };
  },
  mounted: function() {
    this.phoneNum = this.$store.state.token;
  },
  methods: {
    goLink() {
      let myreg = this.YzmCodeInput;
      if (myreg != this.YzmCode) {
        Toast("请输入正确验证码");
        return false;
      }
      let param = new Object();
      param.userPhonenumber = this.phoneNum;
      userInfoGetcode(param)
        .then(response => {
          let { data, result } = response;
          if (result == "ok") {
            this.$router.push({ path: "/login" });
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },

    //获取验证码
    getCode() {
      //个人中心获取验证码
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNumInput)) {
        Toast("请输入正确手机号码");
        return false;
      }
      let param = new Object();
      param.userPhonenumber = this.phoneNum;
      userInfoGetcode(param)
        .then(response => {
          let { data, result } = response;
          if (result == "ok") {
            this.YzmCode = data.code;
            //验证码倒计时
            if (!this.timer) {
              this.YzmStatus = false;
              const nowCount = 5;
              this.count = nowCount;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= nowCount) {
                  this.count--;
                } else {
                  this.YzmStatus = true;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
          }
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
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
  background: rgba(34, 42, 69, 1);
  .user {
    margin: 0.3rem 0.3rem 0;
    width: 6.9rem;
    height: 6.72rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 12px;
    overflow: hidden;

    .user_con {
      height: auto;
      margin: 0 auto;
      .user_con_item {
        width: 80%;
        height: 0.82rem;
        line-height: 0.82rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        margin: auto;
        margin: auto;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        .con_item_l {
          width: 100%;
          line-height: 0.82rem;
          border-bottom: #38446f 0.02rem solid;
        }
        .topnumber {
          width: 100%;
          border: none;
          color: rgba(255, 255, 255, 1);
        }
        &:nth-child(1) {
          width: 100%;
          text-align: center;
          margin: auto;
          margin: 0.4rem 0 0.4rem;
        }
        input {
          width: 100%;
          background: none;
          border: none;
          color: #ffffff;
        }
        &.user_con_item_active {
          .con_item_l {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.3rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 0.82rem;
            text-align: center;
            width: 60%;
            position: relative;
            .yanzhengma {
              width: 60%;
            }
          }
          .codeYzm {
            width: 2rem;
            height: 0.72rem;
            background: rgba(255, 70, 124, 1);
            border-radius: 0.12rem;
            color: #ffffff;
            border-radius: 0.1rem;
            position: absolute;
            right: -2.2rem;
            bottom: 0rem;
          }
        }
      }
    }
    .out_login {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.28rem;
      background: #ffffff;
      color: red;
      line-height: 0.8rem;
    }
  }
}
.login_title {
  margin-top: 0.2rem;
  color: rgba(136, 143, 169, 1);
}
.introduction_start {
  width: 5.9rem;
  height: 0.88rem;
  background: rgba(255, 70, 124, 1);
  border-radius: 0.12rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  margin: 1.3rem 0.5rem 0;
}
</style>
