<template>
  <div class="container">
    <navBar :title="title" :right-text="title">
      <van-icon name="search" slot="right"/>
    </navBar>
    <div class="user">
      <div class="user_con">
        <div class="user_con_item">
          <div class="con_item_l">请设置交易密码，在提现时使用</div>
        </div>
        <div class="user_con_item">
          <div class="con_item_l">
            <input type="text" placeholder=" 请输入6位交易密码" v-model="userPassword">
          </div>
        </div>
        <div class="user_con_item user_con_item_active">
          <div class="con_item_l">
            <input type="text" placeholder=" 请再次输入密码" v-model="userConfirmPassword">
          </div>
        </div>
      </div>

      <div class="introduction_start" @click="goLink()">设置完成</div>
    </div>
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Toast } from "vant";
import { setPassword } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "交易密码设置",
      active: 2,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      userPassword: "",
      userConfirmPassword: ""
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      var myreg = /^\d{6}$/;
      if (!myreg.test(this.userPassword)) {
        Toast("请输入6位数数字密码");
        return false;
      }
      if (this.userPassword != this.userConfirmPassword) {
        Toast("确认密码和设置的密码不一致");
        return false;
      }

      //
      // 初次设置密码
      let param = new Object();
      param.minerPhonenumber = this.$store.state.token;
      param.userPassword = this.userPassword;
      param.userConfirmPassword = this.userConfirmPassword;
      setPassword(param)
        .then(response => {
          console.log(response);
          let { result } = response;
          if (result == "ok") {
            this.$router.go(-1);
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
    width: 6.9rem;
    height: 6.72rem;
    background: rgba(41, 50, 83, 1);
    border-radius: 0.12rem;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 0.3rem;
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
        color: #ffffff;
        font-size: 0.3rem;
        margin-top: 0.4rem;
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
            width: 420px;
            height: 42px;
            font-size: 0.3rem;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: #888fa9;
            line-height: 42px;
          }
          .codeYzm {
            width: 1.4rem;
            height: 0.6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #cccccc;
            color: #888fa9;
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
  width: 5.9rem;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.28rem;
  text-align: center;
  background: rgba(255, 70, 124, 1);
  border-radius: 0.12rem;
  color: #ffffff;
  margin: auto;
  margin-top: 0.8rem;
}
</style>
