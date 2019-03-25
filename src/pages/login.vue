<template>
    <div class="container">
        <div class="container_bg_index">
       
            <div class="phone">
               <div class="phone_l">
                   +86
               </div>
               <div class="phone_r">
                   <input type="text" placeholder="请输入用户名">
               </div>
            </div>
            <div class="phone">
             
               <div class="phone_r">
                   <input type="text" placeholder="请输入密码">
               </div>
            </div>
            <div class="next"  @click="getCode()">
                    登录
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from 'vuex';
import { queryAllNodesProfiles, login } from "../common/js/api";
export default {
  data() {
    return {
      phoneNum: "",
      cmdType: ""
    };
  },
  mountod: function() {},
  methods: {
    ...mapMutations(['changeLogin']),
    goLink() {},

    getCode() {
      let param = new Object();
      param.phoneNum = 13912345678;
      login(param)
        .then(response => {
          console.log(response);
          let { data } = response.data;
          //根据store中set_token方法将token保存至localStorage/sessionStorage中，data["Authentication-Token"]，获取token的value值\
          let userToken =response.data.token;
          // 将用户token保存到vuex中
          this.changeLogin({ Authorization: userToken });
 
          // this.$store.commit("set_token", response.data.token);
          this.$router.push({ path: "/user" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #303030;
  .container_bg_index {
    width: 7.5rem;
    height: 13.34rem;
    background: url("../assets/images/potatobg.png") center no-repeat;
    background-size: 7.5rem auto;
    margin-top: 1.56rem;
    float: left;
    box-sizing: border-box;

    .phone {
      width: 5.16rem;
      height: 0.9rem;
      background-color: #ffffff;
      border-radius: 10px;
      margin: 0 auto;
      margin-top: 4.15rem;
      display: flex;
      justify-content: start;
      align-items: center;
      .phone_l {
        width: 1rem;
        font-size: 0.28rem;
        color: #666666;
      }
      .phone_r input[type="text"] {
        border: none;
        font-size: 0.28rem;
        outline: none;
        margin-bottom: 0px;
        color: #cccccc;
        &.input[type="text"] {
          margin-bottom: 0px;
        }
      }
    }
    .next {
      width: 2.78rem;
      height: 1.3rem;
      background-color: #c06025;
      border-radius: 20px;
      margin: 0 auto;
      margin-top: 0.57rem;
      font-size: 0.4rem;
      font-weight: normal;
      font-stretch: normal;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
