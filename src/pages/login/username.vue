<template>
  <div class="container">
    <navBar :title="title"></navBar>
      <div class="container_introduction">
            <div class="introduction_text">
                <div class="login_input">
                    <input type="text" v-model="userName" placeholder="请输入用户名称">
                </div>
                 <div class="introduction_start" @click="getNext()">完成</div> 
            </div>
          
        </div>

    <!-- <div class="container_introduction">
      <div class="introduction_text">
        <div class="login_input">
          <input type="text" placeholder="请输入矿主名称" v-model="userName">
        </div>
      </div>
      <div class="introduction_start" @click="getNext()">完成</div>
    </div> -->
  </div>
</template>

<script>
import navBar from "../../components/navBar";
import { Toast } from "vant";
import { setUserName } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "完善个人信息",
      userName: ""
    };
  },
  mounted: function() {
    //Toast('提示内容');
  },
  methods: {
    //设置昵称完成后跳转
    goLink() {
      this.$router.push({ path: "/management" });
    },
    getNext() {
      //let myreg=/^\d{6}$/
      if (!this.userName) {
        Toast("请输入正确昵称");
        return false;
      }
      let param = new Object();
      param.userName = this.userName;
      setUserName(param)
        .then(response => {
          console.log(response);
          let { result } = response;
          if ((result = "ok")) {
            Toast("设置完毕，3秒后进入主页");
            //设置3秒后跳转
            setTimeout(() => {
              this.goLink();
            }, 4000);
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
