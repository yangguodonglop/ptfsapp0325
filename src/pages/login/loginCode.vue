<template>
    <div class="container">
         <navBar :title="title"></navBar>
         
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text" v-model="phoneCode" placeholder="请输入验证码">
                </div>
            </div>
            <div class="introduction_start" @click="goNext()">下一步</div>
        </div>
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { login } from "../../common/js/api.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      phoneCode: "",
      title: "验证码",
      getCode: ""
    };
  },
  mounted: function() {
    //从输入手机号码跳转过来发送请求，获取验证码
    let param = new Object();
    param.phoneNum = this.$route.query.phoneNum;
    login(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        this.getCode = data.code;
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goLink() {},
    //验证获取验证码，跳转下一步
    goNext() {
      let myreg = this.getCode;
      if (myreg != this.phoneCode) {
        Toast("请输入正确验证码");
      } else {
        this.$router.push({ path: "/protocol" });
      }
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
  .container_introduction {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .introduction_text {
      font-size: 0.4rem;
      color: #cccccc;
      margin-top: 2.5rem;
      .login_input {
        input {
          border: none;
          color: #cccccc;
          background: #f2f2f2;
          outline: none;
          border-bottom: #cccccc 1px solid;
          padding-bottom: 0.1rem;
          width: 4.6rem;
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
      margin-top: 4.5rem;
      border-radius: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
