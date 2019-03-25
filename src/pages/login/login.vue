<template>
    <div class="container">
         <navBar :title="title"></navBar>
         
        <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text" v-model="phoneNum" placeholder="请输入手机号码">
                </div>
                <div id="show">
                    
                </div>
            </div>
            <div class="introduction_start" @click="getCode()">下一步</div>
        </div>
        
    </div>
</template>

<script>
//import navBar from "../../components/navigationBar";
import navBar from "../../components/navBar";

import { Toast } from "vant";

export default {
  data() {
    return {
      phoneNum: "",
      title: "手机号码验证"
    };
  },
  mounted: function() {
    //Toast('提示内容');
  },
  methods: {
    goLink() {},
    // testClick() {
    //   let nowarr = {
    //     deviceAddr: [{ deviceNum: "1e:24:23:3b:cc:6d", deviceSpace: "" }]
    //   };
    //   alert(nowarr.deviceAddr.length);
    //   // let nowarr ={ "deviceAddr": [ { "deviceNum": "1e:24:23:3b:cc:6d", "deviceSpace": "" }, { "deviceNum": "7a:b6:4e:b7:bf:1d", "deviceSpace": "" } ]}
    //   //         this.$bridge.callhandler('ObjC Echo', params, (data) => {
    //   //     // 处理返回数据
    //   // })
    //   this.$bridge.callhandler("submitFromWeb", { param: "中文测试" }, function(
    //     responseData
    //   ) {
    //     document.getElementById("show").innerHTML =
    //       "send get responseData from java, data = " + responseData;
    //   });
    // },
    //输入手机号验证，跳转下一步
    getCode() {
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phoneNum)) {
        Toast("请输入正确手机号码");
      } else {
        //先移除存储的电话号码唯一标识
        localStorage.removeItem('loginPhone');
        //将唯一的电话号码标识储存到
        localStorage.setItem('loginPhone',this.phoneNum )
        this.$store.commit('changeLogin',{Authorization:"15951813234"})
        this.$router.push({
          path: "/loginCode",
          query: { phoneNum: this.phoneNum }
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
