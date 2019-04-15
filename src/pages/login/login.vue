<template>
    <div class="container">
         <navBar :title="title"></navBar>
         
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text" v-model="phoneNum" placeholder="请输入手机号码">
                </div>
                 <div class="introduction_start" @click="getCode()">下一步</div> 
            </div>
          
        </div>
        
    </div>
</template>

<script>
//import navBar from "../../components/navigationBar";
import navBar from "../../components/navBar";
import { authen } from "../../common/js/api.js";

import { Toast } from "vant";

export default {
  data() {
    return {
      phoneNum: "",
      title: "手机号码验证",
      codeType: ""
    };
  },
  mounted: function() {
    console.log(this.$store.state.token);
  },
  methods: {
    goLink() {},
    //输入手机号验证，跳转下一步
    getCode() {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNum)) {
        Toast("请输入正确手机号码");
        return false;
      }
      debugger;
      let nowtoken = this.$store.state.token;
      alert(nowtoken);
      if (nowtoken == "" || nowtoken == undefined || nowtoken == null) {
        let param = new Object();
        param.userPhonenum = this.phoneNum;
        param.token = "";
        this.codeType = "register";
        authen(param)
          .then(res => {
            console.log(res.response);
            //let { data } = response;
            //this.getCode = data.code;

            this.$router.push({
              path: "/loginCode",
              query: { phoneNum: this.phoneNum, codeType: this.codeType }
            });
          })
          .catch(error => {
            Toast("网络错误，请重新请求");
          });
      } else {
        alert("*****");
        let param = new Object();
        param.userPhonenum = this.phoneNum;
        param.token = nowtoken;
        this.codeType = "login";
        authen(param)
          .then(res => {
            if (res.response.errornum != "1") {
              this.$router.push({
                path: "/loginCode",
                query: { phoneNum: this.phoneNum, codeType: this.codeType }
              });
            } else {
              this.$router.push({
                path: "/find",
                query: { phoneNum: this.phoneNum, codeType: this.codeType }
              });
            }
            //let { data } = response;
            //this.getCode = data.code;

            // this.$router.push({
            //   path: "/loginCode",
            //   query: { phoneNum: this.phoneNum,codeType:this.codeType }
            // });
          })
          .catch(error => {
            Toast("网络错误，请重新请求");
          });
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
  background: #222a45;
  .container_introduction {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    background: #222a45;
    display: flex;
    justify-content: center;
    align-items: center;
    .introduction_text {
      font-size: 0.4rem;
      color: #cccccc;
      width: 6.9rem;
      height: 6.4rem;
      background: rgba(41, 50, 83, 1);
      border-radius: 0.12rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .login_input {
        input {
          border: none;
          color: #cccccc;
          background: none;
          text-align: center;
          outline: none;
          border-bottom: #38446f 1px solid;
          padding-bottom: 0.1rem;
          width: 5.9rem;
          color: #888fa9;
          font-size: 0.3rem;
          margin-top: 1.68rem;
        }
      }
      .introduction_start {
        font-size: 0.28rem;
        color: #ffffff;
        margin: 0 auto;
        background: #cccccc;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.9rem;
        height: 0.88rem;
        background: rgba(255, 70, 124, 1);
        border-radius: 0.12rem;
        margin-bottom: 1.84rem;
      }
    }
  }
}
</style>
