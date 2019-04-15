<template>
    <div class="container">
         <navBar :title="title"></navBar>
         <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                     <input type="text" v-model="testCode" placeholder="请输入验证码">
                    <div class="codeYzm" v-if="YzmStatus" @click="getCode()">获取验证码</div>
                     <div class="codeYzm" v-if="!YzmStatus">{{count}}S</div>
                </div>
                 <div class="introduction_start" @click="goNext()">下一步</div> 
            </div>
          
        </div>
         
        <!-- <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text" v-model="testCode" placeholder="请输入验证码">
                    <div class="codeYzm" v-if="YzmStatus" @click="getCode()">获取验证码</div>
                     <div class="codeYzm" v-if="!YzmStatus">{{count}}S</div>
                </div>
            </div>
            <div class="introduction_start" @click="goNext()">下一步</div>
        </div> -->
        
    </div>
</template>

<script>
import navBar from "../../components/navBar";
import { testCode } from "../../common/js/api.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      phoneCode: "",
      title: "验证码",
      //getCode: "",
      testCode: "",
      YzmStatus: true,
      count: "",
      timer: null
    };
  },
  mounted: function() {
    alert(this.$route.query.phoneNum);
  },
  methods: {
    goNext() {
      let param = new Object();
      param.userPhonenum = this.$route.query.phoneNum;
      param.usertestCode = this.testCode;
      param.codeType = this.$route.query.codeType;
      let nowtoken = this.$store.state.token;
      if (nowtoken == undefined || nowtoken == null) {
        nowtoken = "";
      }
      param.token = nowtoken;
      testCode(param)
        .then(res => {
          console.log(res);
          if (res.data.code != 201) {
            Toast("验证码发送失败，请重新发验证码");
          } else {
            console.log(res.loginServiceResponse.token);
            console.log(res.loginServiceResponse.code);
            alert(this.$route.query.phoneNum);
            this.$store.commit("changeLogin", {
              token: res.loginServiceResponse.token
            });
            this.$store.commit("changeLoginPhone", {
              userPhonenum: this.$route.query.phoneNum
            });
            if(res.registerServiceResponse.errornum=="-1"){
              this.$router.push({ path: "/management" });
            }
            else{
               this.$router.push({ path: "/protocol" });
            }

           
          }
          // let { data } = response;
          // this.getCode = data.code;
        })
        .catch(error => {
          Toast("网络错误，请重新请求");
        });
    },
    //验证获取验证码，跳转下一步
    getCode() {
      // let myreg = this.getCode;
      // if (myreg != this.phoneCode) {
      //   Toast("请输入正确验证码");
      // } else {
      //   this.$router.push({ path: "/protocol" });
      // }
      //从输入手机号码跳转过来发送请求，获取验证码

      let param = new Object();
      param.userPhonenum = this.$route.query.phoneNum;
      param.usertestCode = this.testCode;
      testCode(param)
        .then(res => {
          // console.log(res);
          //if(res.data.code!=201){
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
            //. }
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
// .container {
//   width: 100%;
//   height: 100%;
//   margin: 0 auto;
//   overflow: hidden;
//   background: #f2f2f2;
//   .container_introduction {
//     width: 100%;
//     height: 100%;
//     margin: 0 auto;
//     overflow: hidden;
//     background: #f2f2f2;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     .introduction_text {
//       font-size: 0.4rem;
//       color: #cccccc;
//       margin-top: 2.5rem;
//       .login_input {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         input {
//           border: none;
//           color: #cccccc;
//           background: #f2f2f2;
//           outline: none;
//           border-bottom: #cccccc 1px solid;
//           padding-bottom: 0.1rem;
//           width: 3.6rem;
//         }
//         .codeYzm {
//           width: 1.4rem;
//           height: 0.6rem;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #cccccc;
//           color: #ffffff;
//           border-radius: 0.1rem;
//           font-size: 0.14rem;
//         }
//       }
//     }
//     .introduction_start {
//       font-size: 0.4rem;
//       color: #ffffff;
//       width: 5.6rem;
//       margin: 0 auto;
//       height: 0.9rem;
//       background: #cccccc;
//       margin-top: 4.5rem;
//       border-radius: 0.6rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }
// }
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          border: none;
          color: #cccccc;
          background: none;
          text-align: center;
          outline: none;
          border-bottom: #38446f 1px solid;
          padding-bottom: 0.1rem;
          width: 4.9rem;
          color: #888fa9;
          font-size: 0.3rem;
          margin-top: 1.68rem;
        }
              .codeYzm {
          width: 1.4rem;
          height: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ff467c;
          color: #ffffff;
          border-radius: 0.1rem;
          font-size: 0.14rem;
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
